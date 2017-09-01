<template>
	<div class="cities">
		<div class="areatitle">
			<div class="areatitle-icontext">
				<span class="areatitle-icon iconfont-hotcity"></span>热门城市
				<span class="areatitle-more">
					<router-link to="/city">
						<a href="javascript:;" class="areatitle-morelink">全部城市
							<span class="iconfont">&#xe649;</span>
						</a>
					</router-link>
				</span>
			</div>
		</div>
		<ul class="cities-list">
			<li class="cities-item ellipsis" v-for="item in citiesInfo" :key="item.id">
				<router-link :to="item.link">
					<a class="cities-link" href="javascript:;">{{item.title}}</a>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ["citiesInfo"],
		data () {
			return {}
		}		
	}
</script>

<style scoped>
	.cities {	
		overflow: hidden;
		padding: 0 .1rem;
		margin-top: .2rem;
		background: #fff;
	}
	.cities-list {
		overflow: hidden;
		margin: .04rem .08rem;
	}
	.cities-item {
		float: left;
		width: 25%;
		margin-bottom: .2rem;
		text-align: center;
	}
	.ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cities-link {
		display: block;
		margin: 0 .1rem;
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		color: #212121;
		background: #f0fbfd;
		border-radius: 2px;
	}
	.iconfont-hotcity {
		background-image: url(//s.qunarzz.com/piao/image/touch/daytrip/city.png);
	}
</style>
