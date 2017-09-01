<template>
	<div>
		<ul class="subBanner">
			<li class="subBanner-item">
				<a href="javascipt:;">
					<div class="subBanner-content">
						<h4 class="subBanner-title">清凉夏日游</h4>
						<p class="subBanner-desc">夏日避暑路线精选</p>
						<img class="subBanner-img" src="http://img1.qunarzz.com/piao/fusion/1705/19/2242e99c881ae902.png_80x80_ef0daf45.png">
					</div>
				</a>
			</li>
			<li class="subBanner-item subBanner-item2">
				<a href="javascipt:;">
					<div class="subBanner-content">
						<h4 class="subBanner-title">9元起</h4>
						<p class="subBanner-desc">12周年庆门票秒杀</p>
						<img class="subBanner-img" src="http://img1.qunarzz.com/piao/fusion/1707/a9/31ab3b84c7dc7802.png_80x80_9b35d411.png">
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'IndexFooter',
		data () {
			return {}
		}
	}
</script>


<style scoped>
	.subBanner {
		overflow: hidden;
		width: 100%;
		margin-top: .2rem;
		background-color: #fff;
		text-align: center;
	}
	.subBanner-item {
		position: relative;
		float: left;
		width: 49.8%;
	}
	.subBanner-content {
		position: relative;
		height: 1.2rem;
		margin: 0 .2rem;
	}
	.subBanner-item2 {
		border-left: .02rem solid #f5f5f5;
	}
	.subBanner-title {
		overflow: hidden;
		height: .44rem;
		line-height: .44rem;
		margin-right: 1rem;
		padding-top: .22rem;
		font-size: .3rem;
		color: #212121;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
	}
	.subBanner-desc {
		overflow: hidden;
		height: .36rem;
		line-height: .36rem;
		margin-right: 1rem;
		font-size: .24rem;
		color: #616161;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
	}
	.subBanner-img {
		position: absolute;
		right: 0;
		top: 0;
		width: 1.2rem;
		height: 1.2rem;
		-webkit-border-radius: .44rem;
		-moz-border-radius: .44rem;
		-o-border-radius: .44rem;
		-ms-border-radius: .44rem;
		border-radius: .44rem;
	}
</style>
