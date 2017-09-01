<template>
	<div class="iconswiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="page in pages">
				<div class="iconbar-con">
					<ul class="flexbox">
						<li class="flexbox-layout" v-for="iconsInfo in page">
							<router-link :to="iconsInfo.link">
								<a class="iconbar-itemlink" href="javascript:;">
									<div class="iconbar-imgitem">
										<div class="iconbar-imgcon">
											<img class="iconbar-img" alt="景点门票" :src="iconsInfo.imgUrl"/>
										</div>
									</div>
									<em class="iconbar-name">{{iconsInfo.title}}</em>
								</a>
							</router-link>
						</li>
					</ul>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data () {
			return {
				swiperOption: {
					direction: 'horizontal',
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					observeParents: true
				}
			}
		},
		props: ["iconsInfo"],
		computed: {
			pages: function() {
				const pages = [];
				for (var i = 0; i < this.iconsInfo.length; i++) {
					let page = Math.floor(i/5);
					if (!pages[page]) {
						pages[page] = [];
					}
					pages[page].push(this.iconsInfo[i]);
				}
				return pages;
			}
		},
		components: {
			"swiper": swiper,
			"swiper-slide": swiperSlide
		}
	}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';

	.iconswiper {
		background: #fff;
	}
	.iconbar-con {
		overflow: hidden;
		padding: .24rem .04rem .14rem .04rem;
		background: #fff;
	}
	.flexbox {
		display: inline-blork;
		width: 100%;
		float: left;
		position: relative;
	}
	.flexbox-layout {
		float: left;
		width: 20%;
		display: block;
	}
	.iconbar-imgitem {
		// width: 100%;
	}
	.iconbar-imgcon {
		height: 0;
		width: 64.98%;
		padding: 0 17.54% 64.98%;
	}
	.iconbar-img {
		width: 100%;
	}
	.iconbar-name {
		overflow: hidden;
		display: block;
		height: .54rem;
		margin: 0 .04rem;
		font-size: .24rem;
		line-height: .54rem;
		text-align: center;
		color: #212121;
	}
</style>