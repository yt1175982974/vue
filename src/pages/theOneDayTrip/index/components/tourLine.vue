<template>
	<div class="tourLine">
		<div class="tourLine-head">
			<h3 class="tourLine-title">
				<span>—&nbsp;</span>北京热门线路推荐<span>&nbsp;—</span>
			</h3>
		</div>
		<div class="tourLine-tag">
			<div class="tourLine-tag-list">
				<span class="tourLine-tag-icon iconfont">&#xe693;</span>铁定成团
			</div>
			<div class="tourLine-tag-list">
				<span class="tourLine-tag-icon iconfont">&#xe616;</span>无自费
			</div>
			<div class="tourLine-tag-list">
				<span class="tourLine-tag-icon iconfont">&#xe6d8;</span>无购物
			</div>
		</div>
		<listComponent></listComponent>
		<a class="tourLine-foot" href="javascript:;">
			查看全部一日游
		<span class="iconfont">&#xe649;</span>
		</a>
	</div>
</template>

<script>
	import listComponent from "./component-list.vue"
	export default {
		name: 'IndexFooter',
		data () {
			return {}
		},
		components:{
			listComponent,
		}
	}
</script>


<style scoped>
	@import "../../../../assets/font/iconfont.css";
	.tourLine-foot {
		display: block;
		color: #616161;
		font-size: .3rem;
		line-height: .9rem;
		text-align: center;
		background: #fff;
	}
	.tourLine {
		margin-top: .2rem;
		background: #fff;
		border-bottom: .02rem solid #f5f5f5;
	}
	.tourLine-head {
		padding: .3rem 0;
		text-align: center;
	}
	.tourLine-title {
		position: relative;
		display: inline-block;
		color: #212121;
		font-size: .36rem;
		line-height: .36rem;
	}
	.tourLine-title span {
		color:#c0c0c0;
	}
	.tourLine-tag {
		overflow: hidden;
		padding-bottom: .2rem;
		text-align: center;
		font-size: 0;
		border-bottom: .02rem solid #f5f5f5;
	}
	.tourLine-tag-list {
		display: inline-block;
		position: relative;
		padding: .06rem .2rem;
		margin: 0 .2rem .1rem;
		width: .96rem;
		height: .34rem;
		border: .02rem solid #e0e0e0;
		color: #616161;
		font-size: .24rem;
		line-height: .34rem;
		white-space: nowrap;
		-webkit-border-radius: .46rem;
		-moz-border-radius: .46rem;
		border-radius: .46rem;
	}
	.tourLine-tag-icon {
		position: absolute;
		left: 0;
		bottom: -.08rem;
		background: #fff;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.tourLine-tag-icon {
		position: absolute;
		left: 0;
		bottom: -.08rem;
		top: .26rem;
		background: #fff;
		color: #aaa;
		font-size: .24rem;
	}
</style>