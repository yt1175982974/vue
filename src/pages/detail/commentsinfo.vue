<template>
 	<div class="ticket-commentsinfo-con">
 		<span class="ticket-comment-icon iconfont">&#xe608;</span>
 		<span class="ticket-startlevel  iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
 		<span class="ticket-comment-tagscore">4.9分</span>
 		<a href="#" class="ticket-comments-total">
 			<span class="ticket-comments-totalnum">14682评论&nbsp;</span>
 			<span class="ticket-comments-rightarrow iconfont">&#xe649;</span>
 		</a>
 	</div>
</template>

<script>
	export default {
		data () {
		    return {}
		}
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
	.ticket-commentsinfo-con{
		margin-bottom: .2rem;
		background-color: #fff;
		height: .8rem;
		line-height: .8rem;
	}
	.ticket-comment-icon{
		position: relative;
		display: inline-block;
		width: .36rem;
		height: .36rem;
		margin-left: .2rem;
		margin-right: .1rem;
		background-size: .4rem 3rem;
		color: #00bcd4;
	}
	.ticket-startlevel, .ticket-comment-tagscore{
		color: #00bcd4;
	}
	.ticket-comments-total{
		float: right;
		display: block;
		margin-bottom: .2rem;
		color: #9e9e9e;
	}
	.ticket-comments-totalnum{
		display: inline-block;
		line-height: .28rem;
		font-size: .28rem;
		margin-left: 0 .2rem 0 .16rem;
		
	}
	.iconfont{
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
	}
</style>
