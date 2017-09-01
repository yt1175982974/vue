<template>
	<div class="weekend-container">
		<p class="weekend-container-title">周末去哪儿</p>
		<ul>
			<li v-for="item in weekendInfo" key="item.id" >
			<router-link :to="item.link + '?id=' + item.id">
				<img class="weekend-img" :src="item.imgUrl" :alt="item.title">
				<p class="weekend-title">{{item.title}}</p>
				<p class="weekend-introduce">{{item.intro}}</p>
				</router-link>
			</li>
		</ul>
		<p class="weekend-notice">
			<span class="iconfont">&#xe603;</span><b>票面价</b>是指通过景区指定窗口售卖的纸质门票上标注的价格
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				weekendInfo: [{
					"id": "1",
					"imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
					"title": "学生最爱的博物馆",
					"intro": "周末干嘛？北京很多博物馆已经免费开放啦",
					"link": "/tripList"
				},{
					"id": "2",
					"imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
					"title": "寻找北京的皇城范儿",
					"intro": "数百年的宫廷庙宇，至今依旧威严霸气",
					"link": "/tripList"
				},{
					"id": "3",
					"imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
					"title": "北京必游TOP10",
					"intro": "来北京必去的景点非这些地方莫属",
					"link": "/tripList"
				},{
					"id": "4",
					"imgUrl": "http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",
					"title": "漂流勇进，烧烤露营",
					"intro": "轻松水上漂，任我乐逍遥",
					"link": "/tripList"
				},{
					"id": "5",
					"imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
					"title": "儿童剧场，孩子的乐园",
					"intro": "带宝贝观看演出，近距离体验艺术的无穷魅力",
					"link": "/tripList"
				}]
			}
		}
	}	
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.weekend-container-title {
		height: .8rem;
		line-height: .8rem;
		background: #f5f5f5;
		padding-left: .26rem;
		font-size: .28rem;
	}
	.weekend-img {
		width: 100%;
	}
	.weekend-title {
		line-height: .48rem;
		padding: .2rem 0 0 .24rem;
		font-size: .28rem;
		color: #212121;
	}
	.weekend-introduce {
		line-height: .48rem;
		padding: 0 0 .2rem .24rem;
		font-size: .24rem;	
		color: #616161;	
	}
	.weekend-notice {
		line-height: .32rem;
		padding: .14rem .1rem;
		font-size: .24rem;	
		color: #616161;
		border-top: .1rem solid #f5f5f5;
	} 
	.weekend-notice span {
		margin-right: .08rem;
		font-size: .24rem;
		color: #abb4b4;
	}
	.weekend-notice b {
		font-weight: bold;
	}
</style>