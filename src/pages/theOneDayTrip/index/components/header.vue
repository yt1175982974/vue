<template>
	<header class="header">
		<router-link to="/">
			<a class="header-left iconfont" >&#xe615;</a>
		</router-link>
		<h1 class="header-title">
			<a class="searchheader-inputlink">
				<i class="searchheader-icon iconfont">&#xe632;</i>
				<span class="searchheader-placeholder">景点/目的地/主题</span>
			</a>
		</h1>
		<div class="header-right">
			<router-link to="/city">
				<a class="searchheader-citylink">
					<span class="searchheader-cityname">北京</span>
					<i class="triangle iconfont"></i>
				</a>
			</router-link>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'indexHeader',
		data () {
			return {}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	@import "../../../../assets/font/iconfont.css";

	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		overflow: hidden;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}
	.header-left {
		float: left;
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .12rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
	}
	.header-title {
		position: relative;
		height: .6rem;
		margin: .14rem 1.16rem .14rem .8rem;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.searchheader-placeholder {
		position: absolute;
		top: 0;
		right: 0;
		left: .6rem;
		height: .6rem;
		line-height: .6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
	}
	.searchheader-inputlink {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		color: #ccc;
	}
	.searchheader-icon {
		position: absolute;
		left: .1rem;
		font-weight: 550;
		font-size: .32rem;
	}
	.header-right {
		position: absolute;
		top: 0;
		right: .1rem;
		line-height: .88rem;
		width: .96rem;
		text-align: center;
	}
	.searchheader-citylink {
		display: block;
		overflow: hidden;
		color: #fff;
	}
	.searchheader-cityname {
		display: block;
		float: left;
		max-width: 1.8rem;
		height: 1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.triangle {
		display: inline-block;
		position: relative;
		top: -.02rem;
		left: -.02rem;
		width: 0px;
		height: 0px;
		border-left: .12rem solid transparent;
		border-top: .1rem solid #fff;
		border-right: .1rem solid transparent;
	}
</style>