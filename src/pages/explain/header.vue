<template>
	<div>
		<div class="ad-box" v-show="isShow">
			<div class="ad">
				<div class="ad-style">
					<div class="ad-left">
						<img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png">
						<div class="ad-left-title">
							<h2>去哪儿旅行</h2>
							<p>超过<span>4.6亿</span>人的聪明选择</p>
						</div>
					</div>
					<div class="ad-right">
						<span>下载客户端</span>
					</div>
					<div class="adx" v-on:click="toggle"><img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" /></div>
				</div>
			</div>
		</div>
		<header class="header">
			<a class="header-left iconfont">&#xe615;</a>
			<div class="header-title">北京景点讲解</div>
			<div class="header-right">
				<router-link to="/">
					<span class="nav-city">
            <span class="triangle">&#xe607;</span>
					<span>首页</span>
					</span>
				</router-link>
			</div>
		</header>

	</div>
</template>

<script>
	export default {
		data() {
				return {
					isShow: true
				}
			},
			methods: {
				toggle() {
					this.isShow = false;
				}
			}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.ad-box {
		width: 100%;
		height: 1.2rem;
		background: #000;
	}
	.ad {
		width: 100%;
		height: 1.2rem;
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		background: rgba(0,0,0,0.6);
	}
	
	.ad-style {
		padding: .2rem 0;
	}
	
	.ad-left {
		float: left;
	}
	
	.ad-left-title {
		float: left;
	}
	
	.ad-left-title h2 {
		font-size: .44rem;
		color: #25A4BB;
		font-weight: bold;
		line-height: .44rem;
	}
	
	.ad-left-title p {
		color: #c4c4c4;
		line-height: .4rem;
		font-size: .2rem;
	}
	
	.ad-left-title span {
		font-size: .28rem;
		color: #fab400;
		font-weight: bold;
	}
	
	.ad-left img {
		float: left;
		width: .8rem;
		height: .8rem;
		padding: 0 .2rem;
	}
	
	.ad-right {
		float: right;
		text-align: center;
		position: absolute;
		right: .75rem;
		top: .25rem;
	}
	
	.ad-right span {
		display: block;
		width: 1.6rem;
		height: .66rem;
		background-color: #f4b000;
		line-height: .66rem;
		color: #fff;
		font-weight: bold;
		margin: 0 .2rem;
		font-size: .28rem;
		border-radius: .1rem;
		border-bottom: 3px solid #e58700;
	}
	
	.adx {
		position: absolute;
		top: .1rem;
		right: .1rem;
		width: .4rem;
		height: .4rem;
	}
	
	.adx img {
		width: 100%;
		height: 100%;
	}
	
	.header {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		background: #1ba9ba;
		text-align: center;
		color: #fff;
		font-size: .32rem;
		border-bottom: #1b7a8b .02rem solid;
	}
	
	.iconfont {
		color: #e4e7ea;
	}
	
	.icon-search {
		margin-left: -0.54rem;
	}
	
	.header-left {
		float: left;
		display: inline-block;
		width: .88rem;
		height: .88rem;
		font-size: .36rem;
		line-height: .88rem;
		text-decoration: none;
	}
	
	.header-title {
		float: left;
		position: absolute;
		left: .88rem;
		right: .88rem;
		width: auto;
		height: .6rem;
		margin: .14rem 0;
		line-height: .6rem;
		border-radius: .06rem;
	}
	
	.header-right {
		position: absolute;
		top: 0;
		right: 0;
		width: .88rem;
		line-height: .5rem;
		text-align: center;
	}
	
	.single-line {
		display: block;
	}
	
	.single-line span {
		width: 3.72rem;
		height: .6rem;
		color: #e4e7ea;
	}
	
	.nav-city {
		color: #fff;
		font-size: .24rem;
	}
	
	.triangle {
		display: block;
		height: auto;
		padding-top: .1rem;
		line-height: 1;
	}
</style>