<template>
	<div class="city">
		<ul>
			<li v-for="(item,index) in citys" :class="{active:index==activeIndex}" :key="item.id" @click="handleClick(index)" :router="item.router">
				<span @click="handleCityClick">{{item.text}}</span>
			</li>
		</ul>
		<div class="select" @click="handleSelect"></div>
	</div>
</template>

<script>
	export default {
		name: 'city',
		props:['citys'],
		data() {
			return {
				activeIndex:window.localStorage.index
			}
		},
		methods: {
			handleClick(index) {
	            try {
	                window.localStorage.index = index;
	            } catch(e) {} 
	            
				this.activeIndex = window.localStorage.index;
			},
			handleCityClick(e){
				var a = e.target.parentNode.getAttribute("router");
				this.$router.push(a);
			},
			handleSelect(){
				this.$router.push("/city");
			}
		},
		watch: {
			'$route' (to, from) {
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/font/iconfont.css";
	.city {
		position: relative;
	}
	.city ul {
		margin-right: 14.6%;
		background: #ff4b0a;
		overflow: hidden;
		display: flex;
	}
	ul li {
		flex: 1;
		text-align: center;
		height: .76rem;
	}
	li span {
		box-sizing: border-box;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		color: #fff;
		font-size: .28rem;
		line-height: .76rem;
		text-align: left;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 100%;
		text-align: center;
	}
	.active span{
		    padding-left: .32rem;
    		background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/locate.png) 0 center/.2rem .28rem no-repeat;
    		color: #fef22b;
    		background-position-x: .24rem;
	}
	.select {
		position: absolute;
		top: 0;
		right: 0;
		width: 14.6%;
		height: .76rem;
		background: #ff2d0a;
	}
	.select::before {
		content: '\0020';
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -.1rem 0 0 -.1rem;
		width: .16rem;
		height: .16rem;
		border-bottom: .04rem solid #fff;
		border-left: .04rem solid #fff;
		transform: rotate(-45deg)
	}
</style>