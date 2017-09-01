<template>
 	<div class="ticket-comment-container">
		<h3 class="ticket-comment-title">用户评论</h3>
		<div class="ticket-comment-list">
			<div class="ticket-comment-item border-top" v-for = "(info, index) in commentsInfo" :key="info.id">
				<div class="ticket-comment-stardate">
 					<span class="ticket-startlevel  iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
					<span class="ticket-comment-date">{{info.userId}}&nbsp;&nbsp;{{info.data}}</span>
				</div>
				<p class="ticket-comment-content commentcon">
					{{info.commentContent}}
				</p>
				<div class="ticket-comment-foldbtn iconfont" @click="handleClickFold" :id = "index+'0'">&#xe64b;</div>
				<div class="ticket-comment-imgs" >
					<div class="ticket-comment-imgouter" v-for = "imgs in info.imgUrl">
						<div class="ticket-comment-imginner">
							<img class="ticket-comment-img" :src="imgs">
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="#">
			<div class="ticket-more-refresh border-top">查看全部评论<span class="iconfont">&#xe649;</span></div>
		</a>
 	</div>
</template>

<script>
	export default {
		data () {
		    return {
		     	flag: false
		    }
		},
		props: ["commentsInfo"],
		methods: {			
    		handleClickFold: function(e) {
    			var index = e.currentTarget.id;
    			var comment = document.getElementsByClassName("commentcon")[index/10];
    			if(this.flag == false){
	    			e.currentTarget.innerHTML = "&#xe601;";
	    			comment.style.height ="auto";    							
	    			comment.style.overflow ="auto";    							
    			}else{
    				e.currentTarget.innerHTML = "&#xe64b;";
	    			comment.style.height ="100px";	
    			}
    			this.flag = !this.flag; 
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
	.ticket-comment-container{
		position: relative;
		margin-top: .2rem;
	}
	.ticket-comment-title{
		padding: 0 .2rem;
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .3rem;
		line-height: .88rem;
		text-indent: .2rem;
	}
	.ticket-comment-title::after{
		content: " ";
		position: absolute;
		top: .33rem;
		left: .2rem;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		border-radius: .04rem;
	}
	.ticket-comment-list{
		background: #fff;
	}
	.ticket-comment-item{
		padding: .1rem .2rem .3rem .2rem;
	}
	.ticket-comment-stardate{
		margin-bottom: .1rem;
		line-height: .6rem;
	}
	.ticket-startlevel, .ticket-comment-date{
		vertical-align: middle;
	}
	.ticket-startlevel{
		display: inline-block;
		position: relative;
		width: 1.4rem;
		height: .28rem;
		color: #00bcd4;
	}
	.ticket-comment-date{
		position: relative;
		float: right;
		top: .16rem;
		margin-left: .2rem;
		line-height: .28rem;
		font-size: .24rem;
		color: #212121;
	}
	.ticket-comment-content{
		word-break: break-all;
		word-wrap: break-word;
		height: 100px;
		overflow: hidden;
		line-height: .42rem;
		font-size: .26rem;
		color: #616161;
	}
	.ticket-comment-foldbtn{
		height: .48rem;
		line-height: .48rem;
		text-align: center;
		font-size: .4rem;
		color: #9e9e9e;
	}
	.ticket-comment-imgs{
		margin: .2rem 0 .1rem 0;
		position: relative;
		zoom: 1;
		overflow: hidden;
	}
	.ticket-comment-imgouter{
		float: left;
		width: 33.33%;
		margin-bottom: .1rem;
	}
	.ticket-comment-imginner{
		margin: 0 .07rem;		
		height: 0;
		padding-bottom: 73.87%;
		overflow: hidden;

	}
	.ticket-comment-img{
		width: 100%;
		background: #ccc;
	}
	.ticket-more-refresh{
		position: relative;
		margin-top: -.02rem;
		height: .8rem;
		background: #fff;
		color: #616161;
		line-height: .8rem;
		text-align: center;
		z-index: 2;
		vertical-align: middle;
	}
</style>
