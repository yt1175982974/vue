<template>
 	<div class="ticket-promote-container">
		<h3 class="ticket-promote-title">看了该景点的人还看了</h3>
		<div class="ticket-promote-list">
			<div class="ticket-promote-item border-top" v-for="item in promoteInfo">
				<router-link :to="item.link + '?id=' + item.id">
					<img class="ticket-promote-img" :src="item.imgUrl" :key="item.id">
					<div class="ticket-promote-info">
						<div class="ticket-promote-sight">
							{{item.sight}}
							<span class="ticket-promote-sightstar"></span>
						</div>
						<div  class="ticket-promote-price">
							&yen;
							<em class="ticket-promote-num">{{item.price}}</em>
							<span class="ticket-promote-flag">起</span>
						</div>
						<div class="ticket-promote-comment">
							<span class="ticket-startlevel  iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
							<span class="ticket-promote-commentnum">{{item.commentnum}}</span>
						</div>
						<div class="ticket-promote-position">
							<span class="ticket-promote-subposition">{{item.subposition}}</span>
						</div>
					</div>
				</router-link>	
			</div>
		</div>
 	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	
		    }
		},
		props:["promoteInfo"]
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .iconfont{
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
	}
	.ticket-promote-container{
		position: relative;
		margin: .2rem 0 .4rem 0;
	}
	.ticket-promote-title{
		padding: 0 .2rem;
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .3rem;
		line-height: .88rem;
		text-indent: .2rem;
	}
	.ticket-promote-title::after{
		content: " ";
		position: absolute;
		top: .33rem;
		left: .2rem;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		border-radius: .04rem;
	}
	.ticket-promote-list{
		overflow: hidden;
		background: #fff;
	}
	.ticket-promote-img{
		margin: .2rem .2rem 0 .2rem;
		width: 1.62rem;
		height: 1.62rem;
		float: left;
	}
	.ticket-promote-info{
		position: relative;
		padding-top: .2rem;
		margin-left: 2.02rem;
		height: 1.8rem;
	}
	.ticket-promote-sight{
		position: absolute;
		top: .2rem;
		left: 0;
		right: 1.5rem;
		height: .4rem;
		line-height: .4rem;
		font-size: .3rem;
		color: #212121;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.ticket-promote-sightstar{
		color: #adadad;
	}
	.ticket-promote-price{
		position: absolute;
		right: .2rem;
		top: .2rem;
		line-height: .2rem;
		vertical-align: baseline;
		color: #ff9800;
	}
	.ticket-promote-num{
		font-size: .36rem;
	}
	.ticket-promote-flag{
		color: #9e9e9e;
	}
	.ticket-promote-comment{
		position: absolute;
		top: 1rem;
		left: 0;
	}
	.ticket-startlevel{
		display: inline-block;
		position: relative;
		width: 1.2rem;
		height: .28rem;
		color: #00bcd4;
	}
	.ticket-promote-commentnum{
		margin-left: .4rem;
		line-height: .28rem;
		font-size: .24rem;
		vertical-align: middle;
		color: #9e9e9e;
	}
	.ticket-promote-position{
		position: absolute;
		bottom: .24rem;
		left: 0;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.ticket-promote-subposition{
		padding: 0 .04rem 0 .1rem;
	}
</style>
