<template>
	<div class="foot-container">
		<ul class="select">
			<li to="" class="select-item">
				<span class="iconfont">&#xe60f;</span>
				<b>机票</b>
			</li>
			<li to="" class="select-item">
				<span class="iconfont">&#xe611;</span>
				<b>酒店</b>
			</li>
			<li to="" class="select-item">
				<span class="iconfont">&#xe83f;</span>
				<b>公寓</b>
			</li>
			<span class="halving-line">|</span>
			<li to="" class="select-item more">
				<span class="iconfont">&#xe635;</span>
				<b>更多</b>
			</li>
		</ul>
		<p class="foot-login">
			<span to="">登录</span><span to="">我的订单</span><span to="">最近浏览</span><span to="">关于我们</span>
		</p>
		<p class="version-select">
			<span class="version-touch">触屏版</span>
			<span class="version-pc">电脑版</span>
		</p>
		<p class="archival-information">Qunar 京ICP备05021087<span to="">意见反馈</span></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.select {
		padding: .2rem .75rem 0;
		background: #f5f5f5;
		overflow: hidden;
		display: flex;
		justify-content: space-around;
		font-size: .28rem;	
	}
	.select-item {
		line-height: .5rem;
		text-align: center;
		color: #acacac;			
	}
	.select-item b {
		text-decoration: underline;
	}
	.select-item span {
		font-size: .4rem;
		vertical-align: top;
	}
	.halving-line {
		color: #acacac;
		line-height: .5rem;
	}
	.more span {
		font-size: .28rem;
	}
	.more b {
		text-decoration: none;
	}
	.foot-login {
		line-height: .8rem;
		font-size: .28rem;
		color: #25a4bb;
		background: #f5f5f5;
		border-bottom: .005rem solid #cacaca; 
	}
	.foot-login span {
		margin-left: .4rem;
	}
	.version-select {
		padding-top: .2rem;
		text-align: center;
		font-size: .28rem;
		background: #f5f5f5;
		color: #212121;
	}
	.version-pc {
		margin-left: .4rem;
		color: #25a4bb;
	}
	.archival-information {
		padding: .2rem;
		font-size: .28rem;
		text-align: center;
		background: #f5f5f5;
		color: #9e9e9e;
	}
</style>