<template>
	<div>
		<ul class="prdDetailGroup" ref="prdDetailGroup" @click="handleGroupClick">
			<li v-for="(item, index) of infoGroup" v-if="index == 0" class="prdDetailItem prdDetailItem-active">{{item.title}}</li>
			<li v-else class="prdDetailItem">{{item.title}}</li>
		</ul>

		<!--start行程介绍  -->
		<div class="card-group" ref="groupOne">
			<div class="routesum-Box">
				<div class="routesumbox">
					<div class="routesum-itemBox" v-if="routesum">
						<div class="routesum-item" v-for="item of routesum">
							<div class="routesum-title">
								<span class="iconfont" v-html="item.icon"></span>
								<span>{{item.category}}</span>
							</div>
							<div class="routesum-content">{{item.way}}</div>
						</div>
					</div>
					<div class="summary-head" v-if="introduce">
						<h3 class="summary-title">{{introduce.title}}</h3>
					</div>
					<div class="card-content" v-if="introduce">
						<p class="card-desc" v-html="introduce.context"></p>
					</div>
				</div>
			</div>
		</div>

		<div v-for="(item, index) of infoGroup" v-if="index == 0">
			<h3 class="route-headtext">{{item.viceTitle}}</h3>
			<div role="tabContent">
				<div class="prddetail-content">
					<div v-for="value of item.text" class="prddetail-routeitem">
						<span class="prddetail-date">{{value.date}}</span>
						<div class="prddetail-route">
							<span class="iconfont pos" v-html="value.icon"></span>
							<a href="javascript:;" class="route-title" style="color:#00afc7;display: inline-block;" v-if="value.aggregate">{{value.aggregate}} </a>
							<h5 class="route-title" v-else>{{value.title}}</h5>
							<p class="route-desc">{{value.content}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="moreRoadInfo">查看详细产品介绍 〉</div>
		</div>
		<!--end行程介绍  -->
		
		<!--start地图  -->
		<div class="map-box">
			<div id="map"></div> 
			<div class="big-map"  v-show="show">
				<div id="big-map"> 
				</div>
				<div class="map-title"><span class="iconfont" @click="handleMapClose">&#xe615;</span>景点地图</div>
			</div>
		</div>
		<!--end地图  -->		

		<!--费用说明  开始  -->
		<div v-for="(item, index) of infoGroup" v-if="index == 1" class="card-group">
			<div class="cost" id="cost">
				<div class="cost-title">
					<div class="cost-title-border"></div>
					<span>{{item.viceTitle}}</span>
				</div>
				<div v-for="value of item.text">
					<p class="cost-classify">{{value.category}}</p>
					<div class="cost-table">
						<div class="cost-table-son1" v-for="info of value.content">
							<div class="cost-table-son1-son1">{{info.key}}</div>
							<div class="cost-table-son1-son2" v-html="info.value"></div>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>

			<p class="cost-classify">{{item.other}}</p>
			<p class="cost-classify-son1" v-for="value of item.content" v-html="value.value"></p>
			<div style="clear:both;"></div>
		</div>
		<!--费用说明  结束  -->
 
		<div class="card-group useexplain" :class="{'useexplainhidden': useExpFlag}" id="useexplain" ref="useexplain" v-for="(item, index) of infoGroup" v-if="index == 2">
			<div class="useexplain-title">
				<div class="useexplain-title-border"></div>
				{{item.viceTitle}}
			</div>
			<div v-for="value of item.text">
				<p class="useexplain-classify">{{value.title}}</p>
				<div class="useexplain-classify-son1" v-html="value.content"></div>
			</div>
			<div v-show="BtnShowFlag"  @click="handleClickShowMore" id="useexplainbutton">点击查看更多</div>
			<div v-show="BtnHiddenFlag" @click="handleClickShowMore" id="useexplainbutton">收起</div>
			<div style="clear:both;"></div>
		</div>
	</div>
	<!--end使用说明  -->
	</div>
</template>

<style scoped>
@import "../css/prddetailGroup.css";
@import "../../../assets/font/iconfont.css";
</style>


<script>
export default {
	data() {
		return {
			show: false,
			map: "",
			BtnShowFlag:true,
			BtnHiddenFlag: false,
			useExpFlag: true
		}
	},
	props: ["routesum", "introduce", "infoGroup"],
	mounted() {
		this.autoScroll();
		this.loadmap(); 
		AMap.event.addListener(this.map, "click", this.handleClickMap);
	},
	destroyed() {
		window.onscroll = null;
	},
	methods: {
		handleBigClick(){
      		const that = this;
      		var _big=that.$refs.fivebuseexplainbig;
      		var _father=that.$refs.fivebuseexplain;
      		var _small=that.$refs.fivebuseexplainsmall;
      		this.isNotig = false;
      		this.isBig = true;
      		_big.style.display="none";
      		_small.style.display="block";
    	},  
    	handlesmallClick(){
      		const that = this;
      		var _big=that.$refs.fivebuseexplainbig;
      		var _father=that.$refs.fivebuseexplain;
      		var _small=that.$refs.fivebuseexplainsmall;
      		this.isNotig = true;
      		this.isBig=false;
      		_big.style.display="block";
      		_small.style.display="none";
    	},
		loadmap() {
			this.map = new AMap.Map('map', {
				zoom: 11,
				dragEnable: false,
				center: [116.016802, 40.356188]
			}); 
		},
		handleClickMap() {
			this.show = true  
			const map = new AMap.Map('big-map', {
				zoom: 11,
				center: [116.016802, 40.356188]
			});
		}, 
		handleMapClose() {
			this.show = false  
		},
		handleGroupClick(e) {
			let uls = e.currentTarget.children,index = 0;
			for (var i = 0; i < uls.length; i++) {
				var element = uls[i];
				element.className= "prdDetailItem";
				(e.target == element) && (index = i);
			}
			uls[index].className="prdDetailItem prdDetailItem-active";
		
			let cards = document.getElementsByClassName("card-group");
			cards[index].scrollIntoView( );
		},
		autoScroll() {
			const that = this;
			let ulsGroup = that.$refs.prdDetailGroup,
				ulsTop = ulsGroup.offsetTop;
			window.onscroll = function() {
				let windowScrollTop = window.scrollY;
				if (windowScrollTop >= ulsTop) {
					ulsGroup.style.position = "fixed";
					ulsGroup.style.top="44px";
					ulsGroup.style.zIndex = 999;
				} else {
					ulsGroup.style.position="static";
					ulsGroup.style.zIndex = 0;
				}
			}
		},
		handleClickShowMore() {
			this.BtnShowFlag = !this.BtnShowFlag;
			this.BtnHiddenFlag = !this.BtnHiddenFlag;
			this.useExpFlag = this.BtnShowFlag;
		}
	}
}
</script>
