<template>
  	<div>
		<div class="comment-con-info" id="box">
			<ul class="comment-ulcon" v-for="(list, index) in lists" :key="index + '_comment_list'">
		  		<li class="comment-list border-top" v-for="(item,liindex) in list">
		  			
		  			<div class="comment-list-head">
			  			<span class="comment-star iconfont">
			  				&#xe65b;&#xe65b;&#xe65b;&#xe65b;&#xe65b;
			  			</span>
			  			<span class="comment-time">
			  				<span v-html="item.account">{{item.account}}</span>
			  				<span v-html="item.time">{{item.time}}</span>
			  			</span>
		  			</div>
		  			
		  			<div class="comment-descr">
			  			<p :class="{isactive:showtext===index*10+liindex}" class="comment-text">
			  				{{item.txt}}
			  			</p>
			  			<div v-if="item.show" class="comment-text-more">
				  			<span @click="handleTextMore(index*10+liindex)" class="iconfont" >
				  				&#xe64b;
				  			</span>
			  			</div>
		  			</div>
		  			
		  			<div class="comment-imgbox" >
		  				<img class="comment-img" 
		  					v-if="item.boolean"
			  				v-for="(itemimg, imgindex) in item.img" 
			  				:src="itemimg" 
			  				@click="handleOpenImg(imgindex,index*10+liindex)" 
		  				/>
		  				<comment-img 
			  				v-if="showimg===index*10+liindex" 
			  				@closeimgbox="handleCloseImg" 
			  				:imgindex="imgindex"
			  				:propsimglist="item.img">
		  				</comment-img>
		  			</div>
		  			
		  		</li>
		  		<li>
			  		<div v-if="count===index" class="comment-addmore"  @click="handleAddMore">查看更多</div>
			  		<div v-if="count>index" class="comment-addmore" >没有更多了</div>
			  	</li>
	  		</ul>

		</div>		
 
  	</div>	
</template>

<script>

	import commentimg from "./commentimg"

	export default {
	    created: function() {
	        this.$http.get( '/static/comment/comment.json' ).then( response => {
	            this.commentlistInfo = response.body.data.indexInfo;            
	        }, response => {
	            console.log( "get list data error" )
	        });
	    },
	    data () {
		    return {
		        commentlistInfo: [],
		        count: 0,
		        showtext: false,
		        showimg:"",
		        imgindex:""
		    }
	    },
	    components: {
		  	"comment-img": commentimg
		}, 
	  	computed: {
	        lists: function() {
	            var lists = [],
	                length = (this.count+1)*10 >= this.commentlistInfo.length ? this.commentlistInfo.length : (this.count + 1) * 10;
	            for (var i = 0; i < length; i++) {
	            	if(this.commentlistInfo[i].txt.length > 104){
	            		this.commentlistInfo[i].show=true
	            	} else{
	            		this.commentlistInfo[i].show=false
	            	};
	                var list = Math.floor(i / 10); 
	                if ( !lists[list] ) { 
	                    lists[list] = [];
	                }
	                lists[list].push( this.commentlistInfo[i] );
	            }	
	            return lists;
	        }
	    },
	    methods: {
	    	handleTextMore:function(index){	
	    		this.showtext = index;		
	    	},
	    	handleAddMore:function() {		
	    		this.count++;
	    	},
	    	handleGobackClick:function() {
	    		history.go(-1);
	    	},
	    	handleOpenImg:function(imgindex,allindex) {
	    		this.showimg = allindex;
	    		this.imgindex = imgindex;
	    	},
	    	handleCloseImg:function(){
	    		this.showimg = ""
	    	}	
	    } 
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	#box .isactive {
		display: block;
	    overflow: visible;
	    text-overflow: visible;
	}
	#box .isactive+.comment-text-more {	
		display: none;
	}
	.comment-header {
		position: relative;
	    line-height: .88rem;
	    text-align: center;
	    background: #00bcd4;
	}
	.header-return {
		float: left;
		margin-left: .1rem;
		color: #fff;
	}
	.comment-header-con {
		width: 100%;
		line-height: .88rem;
		font-size: .32rem;
		color: #fff;
		padding-left: 2.8rem; 
		box-sizing: border-box;
	}
	.comment-con-info {
		position: relative;
		padding: .2rem 0;
	    background: #f5f5f5;
	}
	.comment-ulcon {
		padding-bottom: .88rem; 
		background: #fff;
	}
	.comment-list::before {
		border-color: #999;
	}
	.comment-list {
		position: relative;
    	font-size: .28em;
    	padding: 0 .2rem .25rem .55rem ;
    	color: #212121;
    	font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica,sans-serif;
	}
	.comment-list-head {
		display: flex;
		justify-content: space-between;
		flex-flow: row;
		padding: .25rem 0;
	}
	 .comment-star {
	 	color: #fc6343;
	 	display: block;	 
	 	font-size: 0.3rem;
	 }
	 .comment-star::after {
	 	margin-right: -.1rem;
	 }
	.comment-time {		
		color: #999;
	    font-size: .26rem;
	    display: block;	   	     
	}
	.comment-text {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: hidden;
	    -webkit-line-clamp: 4;
	    -webkit-box-orient: vertical;
	    line-height: .42rem;
	    font-size: .28rem;
	    padding-right: .06rem;
	    color: #999;
	}
	.comment-text-more {
		position: relative;
		padding-top: .16rem;
	    height: .4rem;
	    text-align: center;
	}
	.comment-imgbox {
		width: 90%;
		padding-top: .1rem;
		overflow: hidden;
	}
	.comment-img {
		width: 1.05rem;
	    height: 1.05rem;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	    position: relative;
	    float: left;
	    margin: .1rem .2rem 0 0;
	}	
	.comment-addmore::before {	
		border-color:#999;
	}
	.comment-addmore {
		width: 100%;
		height: .88rem;
		position: absolute;
		bottom: 0;
		background: #fff;
		text-align: center;
		font-size: .32rem;
		line-height: .88rem;
		border-top: .02rem dashed #999;	
		margin-bottom: .2rem;
	}
</style>
	