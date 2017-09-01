<template>
	<div>
        <div class='ticket-header' @scroll="heightScroll()" v-show="header" :style="{ opacity : opacity}">
            <a class='ticket-header-goback iconfont' @click="handleBackClick">&#xe615;</a>
            <h1 class='ticket-header-title'>广州长隆旅游度假区</h1>
        </div>
        <a class="ticket-header-back iconfont" v-show="isBack" @click="handleBackClick">
			<span class="ticket-headerback-bg"></span>
			<span class="ticket-headerback-icon">&#xe615;</span>
        </a>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	scroll: '',
                header: false,
                opacity: 0,
                isBack: true
		    }
		},
		methods:{
			heightScroll() {
				var opacityValue = document.body.scrollTop / 100;
                if(document.body.scrollTop > 0){  
                    this.header = true;
                    this.opacity = opacityValue;
                    this.isBack = false;               
                }else{
                    this.header = false;
                    this.opacity = opacityValue;
                    this.isBack = true;               
                }           
            },
            handleBackClick: function() {
            	window.history.go(-1);
            }     
        },
        mounted() {
           window.addEventListener('scroll', this.heightScroll)
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
	.ticket-header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		z-index: 20;
	}
	.ticket-header-goback,.ticket-header-back{
		position: absolute;
		font-size: .36rem;
		color: #fff;
		text-align: center;
	}
    .ticket-header-goback{	
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;		
	}
	.ticket-header-title{
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	.ticket-header-back{
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		z-index: 30;
	}
	.ticket-headerback-bg{
		display: block;
		width: .72rem;
		height: .72rem;
		background: #000;
		opacity: .5;
		border-radius: .36rem;
	}
	.ticket-headerback-icon{
		position: absolute;
		left: -.06rem;
		top: 0;
		display: block;
		width: .72rem;
		line-height: .72rem;
		text-align: left;
		text-indent: .24rem;
	}
</style>
