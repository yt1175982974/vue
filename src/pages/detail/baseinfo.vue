<template>
 	<div class="ticket-baseinfo">
 		<div class="ticket-baseinfo-address border-bottom" id="card-address">
 			<p class="ticket-baseinfo-address-txt">
 				<span class="ticket-baseinfo-address-icon iconfont">&#xe665;</span>
 				广东省广州市番禹区迎宾路长隆旅游度假区内
 				<span class="ticket-baseinfo-address-arrow iconfont" @click='detailmap'>&#xe649;</span>
 			</p>
 		</div>
		<a href="#" class="ticket-baseinfo-intro">
			<p class="ticket-baseinfo-intro-txt">
				<span class="ticket-baseinfo-intro-icon iconfont">&#xe636;</span>
				查看景点简介及开放时间
				<span class="ticket-baseinfo-intro-arrow iconfont">&#xe649;</span>
			</p>
		</a>
		<Detailmap v-show="isShow" class="Map" @handleClickClose="handleClickClose"/>
 	</div>
</template>

<script>
import Detailmap from "./detailmap.vue"
	export default {
		data () {
		    return {
		    	isShow: false
		    }
		},
		components: {
			Detailmap
		},
		methods:{
			detailmap: function(){
				this.isShow = true
			},
			handleClickClose() {
				this.isShow = false 
			}
		}
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .Map {
    	position: fixed;
    	top:0;
    	left: 0;
    	right: 0;
    	bottom: 0;
    	z-index: 1000
    }
	.ticket-baseinfo{
		position: relative;
		top: -.1rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
	}
	.ticket-baseinfo-address, .ticket-baseinfo-intro{
		display: block;
		position: relative;
		height: .88rem;
		color: #212121;
		line-height: .88rem;
	}
	.ticket-baseinfo-address-txt, .ticket-baseinfo-intro-txt{
		overflow: hidden;
		padding-right: .56rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.iconfont{
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
	}
	.ticket-baseinfo-address-icon, .ticket-baseinfo-intro-icon{
		margin-right: .2rem;
		color: #9e9e9e;
	}
	.ticket-baseinfo-address-arrow, .ticket-baseinfo-intro-arrow{
		position: absolute;
		right: 0;
		top: .2rem;
		color: #9e9e9e;
	}
</style>
