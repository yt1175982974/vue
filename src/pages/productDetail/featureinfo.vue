<template>
	<div class="ticket-prddetail-group">
		<h3 class="ticket-prddetail-title">景区信息</h3>
		<div class="ticket-prddetail-content border-top">
			<div class="ticket-sightlist" >
				<span class="ticket-sightlist-item" >
					<a href="#" class="ticket-sightlist-link">
						<span class="iconfont">&#xe667;</span>	
	                	十渡聚龙湾玻璃栈道
					</a>
				</span>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	
		    }
		}
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
	.ticket-prddetail-group{
		margin-top: .2rem;
		padding: .01rem 0;
		background: #fff;
	}
	.ticket-prddetail-title{
		position: relative;
		padding: 0 .2rem;
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	.ticket-prddetail-title::after{
		content: " ";
		position: absolute;
		top: .32rem;
		left: .2rem;
		width: .06rem;
		height: .27rem;
		background: #00bcd4;
		border-radius: .04rem;
	}
	.ticket-prddetail-content{
		color: #9e9e9e;
		font-size: .28rem;
		line-height: .44rem;
		overflow: hidden;
		padding: .15rem 0;
		margin: 0 .2rem;
	}
	.ticket-sightlist{
		overflow: hidden;
		overflow-x: auto;
		white-space: nowrap;
	}
	.ticket-sightlist-item{
		display: inline-block;
		padding: 0 .2rem;
		margin: .15rem 0;
		line-height: .4rem;
		font-size: .28rem;
	}
	.ticket-sightlist-link{
		color: #212121;
	}
</style>
