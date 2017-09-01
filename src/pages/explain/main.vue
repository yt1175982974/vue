<template>
	<div class="box">
		<div class="banner">
			<img src="//img1.qunarzz.com/piao/fusion/1707/10/fdbb01bcdb3b0802.jpg" />
		</div>
		<div class="main-tab">
			<div class="m-tab">
				<div class="tab-style" @click="handleClick">
					<span class="tab-name">{{text}}</span>
					<span class="tab-triangle"></span>
					<span class="tab-circle"></span>
				</div>
				<ul class="tab-choose" v-show="show" @click="itemClick">
					<li class="item item-color">故宫</li>
					<li class="item">天坛公园</li>
					<li class="item">颐和园</li>
				</ul>
			</div>
		</div>

		<div class="ex-group">
			<div class="ex-caption">
				<div class="inner">
					<h2 class="name">热销区</h2>
					<div class="arrow"></div>
				</div>
			</div>
			<ul class="ex-container">
				<li class="ex-item" v-for="item in mapList" :key="item.id" v-show:show="palace">
					<a href="#" class="ex-a">
						<div class="ex-img">
							<img class="ex-item-url" :src="item.imgUrl" this.mapList1=d ata.mapList1/>
							<span class="ex-mask">
					    	<span class="mask-font">{{item.mask}}</span>
							</span>
						</div>
						<h4 class="ex-item-name">{{item.name}}</h4>
						<p class="ex-item-intro">{{item.intro}}</p>
						<div class="ex-price">
							<span class="ex-item-price">￥
				        <em class="ex-price-num">{{item.priceNum}}</em>
				    </span>
							<span class="ex-item-cost">票面价￥
				        <em class="ex-old-num">{{item.oldNum}}</em>
				    </span>
						</div>
						<span class="ex-btn">预定</span>
					</a>
				</li>
				
				<li class="ex-item" v-for="item in mapList1" :key="item.id" v-show:show="park">
					<a href="#" class="ex-a">
						<div class="ex-img">
							<img class="ex-item-url" :src="item.imgUrl" this.mapList1=d ata.mapList1/>
							<span class="ex-mask">
					    	<span class="mask-font">{{item.mask}}</span>
							</span>
						</div>
						<h4 class="ex-item-name">{{item.name}}</h4>
						<p class="ex-item-intro">{{item.intro}}</p>
						<div class="ex-price">
							<span class="ex-item-price">￥
				        <em class="ex-price-num">{{item.priceNum}}</em>
				    </span>
							<span class="ex-item-cost">票面价￥
				        <em class="ex-old-num">{{item.oldNum}}</em>
				    </span>
						</div>
						<span class="ex-btn">预定</span>
					</a>
				</li>
				
				<li class="ex-item" v-for="item in mapList2" :key="item.id" v-show:show="summer">
					<a href="#" class="ex-a">
						<div class="ex-img">
							<img class="ex-item-url" :src="item.imgUrl" this.mapList1=d ata.mapList1/>
							<span class="ex-mask">
					    	<span class="mask-font">{{item.mask}}</span>
							</span>
						</div>
						<h4 class="ex-item-name">{{item.name}}</h4>
						<p class="ex-item-intro">{{item.intro}}</p>
						<div class="ex-price">
							<span class="ex-item-price">￥
				        <em class="ex-price-num">{{item.priceNum}}</em>
				    </span>
							<span class="ex-item-cost">票面价￥
				        <em class="ex-old-num">{{item.oldNum}}</em>
				    </span>
						</div>
						<span class="ex-btn">预定</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer"><i>&#xe603;</i><span class="footer-price">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
	</div>

</template>

<script>
	export default {
		data() {
				return {
					"show": false,
					text: "故宫",
					"palace": true,
					"park": false,
					"summer": false,
					mapList: [],
					mapList1: [],
					mapList2: []
				}
			},
			methods: {
				handleClick: function() {
					this.show = !this.show
				},
				itemClick: function(e) {

					this.show = !this.show;
                    
                    var index = this.mapList.indexOf(".item");
					var itemElem = document.getElementsByClassName("item");
					for(var i = 0; i < itemElem.length; i++) {
						itemElem[i].className = "item";
					}
					e.target.className = "item item-color";
					this.text = e.target.innerHTML;
					
					switch(this.text) {
						case "故宫":
						    this.palace = true;
						    this.park = false;
						    this.summer = false;
						break;
						case "天坛公园":
						    this.palace = false;
						    this.park = true;
						    this.summer = false;
						break;
						case "颐和园":
						    this.palace = false;
						    this.park = false;
						    this.summer = true;
						break;
					}
				}
			},
            created() {
				this.$http.get('/static/index.json').then(response => {
					var data = response.body.data;
					this.mapList = data.mapList;
					this.mapList1 = data.mapList1;
					this.mapList2 = data.mapList2;
					var tabName = document.getElementsByClassName('tab-style')[0];
					window.addEventListener('scroll',()=>{
						console.log(window.scrollY);
						if(window.scrollY >= 288) {
							tabName.className = 'tab-style tab-style-fixed';
						}else {
							tabName.className = 'tab-style';
						}
					})
				}, response => {
					console.log("ajax error");
				});
			}
	}
</script>

<style>
	@import 'main.css';
</style>