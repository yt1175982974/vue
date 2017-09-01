<template>
	<div class="sights">
		<div class="areatitle">
			<div class="areatitle-icontext">
				<span class="areatitle-icon iconfont-mustsight"></span>必游景点推荐
			</div>
		</div>
		<ul class="sights-list">
			<li class="sights-item" v-for="item in sightsInfo" :key="item.id">
				<router-link :to="item.link">
					<a href="javascript:;" class="sights-link">
						<div class="sights-inner">
							<div class="sights-imgcon">
								<img class="sights-img" :src="item.imgUrl"/>
							</div>
							<div class="sights-info">
								<h5 class="sights-name">{{item.title}}</h5>
								<p class="sights-line">有
									<span class="sights-linenum">{{item.lines}}</span>条路线
								</p>
							</div>
						</div>
					</a>
				</router-link>
			</li>
		</ul>
		<div class="sights-more">
			<router-link to="/theOneDayTrip-list">
				<a href="javascript:;" class="sights-morebtn">北京全部一日游</a>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["sightsInfo"],
		data () {
			return {}
		}
	}
</script>

<style scoped>
	.sights {
		padding: 0 .2rem;
		margin-top: .2rem;
		background: #fff;
		overflow: hidden;
	}
	.sights-list {
		overflow: hidden;
		margin-left: -.1rem;
	}
	.sights-item {
		width: 33.33%;
		float: left;
	}
	.sights-link {
		display: block;
	}
	.sights-inner {
		margin-left: .1rem;
	}
	.sights-imgcon {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 72.174%;
		background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) no-repeat;
		background-size: cover;
	}
	.sights-img {
		width: 100%;
	}
	.sights-info {
		padding: .16rem 0;
		text-align: center;
	}
	.sights-name {
		overflow: hidden;
		height: .32rem;
		line-height: .32rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color: #212121;
	}
	.sights-line {
		padding: .04rem 0;
		height: .34rem;
		line-height: .34rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
	.sights-linenum {
		color: #00afc7;
	}
	.sights-more {
		margin-bottom: .24rem;
		text-align: center;
	}
	.sights-morebtn {
		display: inline-block;
		height: .6rem;
		padding: 0 .3rem;
		border: .01rem solid #bdbdbd;
		border-radius: .12rem;
		color: #212121;
		font-size: .28rem;
		line-height: .6rem;
		text-align: center;
	}
	.iconfont-mustsight {
		background-image: url(//s.qunarzz.com/piao/image/touch/daytrip/sight.png);
	}
</style>