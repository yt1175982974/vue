<template>
    <div class="landscape">
    	<div class="landscape-header">
    		<router-link :to='{path:"/weekend/detail?title="+title+"&newPrice="+newPrice+"&oldPrice="+oldPrice+"&src="+src+"&imgs="+imgs+"&id="+id}'>
                <a class="landscape-header-return iconfont">&#xe720;</a>
            </router-link>
    		<h1 class="landscape-header-title">详情介绍</h1>
    	</div>
    	<div class="landscape-content">
    		<h3 class="landscape-content-title">温都水城  乐山亲水</h3>
			<div class="landscape-content-box" v-for="item in contentsInfo">
				<h4 class="content-box-title">{{item.contitle}}</h4>
				<div class="content-img-box">
					<img class="content-img" :src="item.imgUrl"/>
					<div class="content-img-title">{{item.imgtitle}}</div>
				</div>
				<div class="content-img-desc">{{item.imgdesc}}</div>
			</div>
			<div class="landscape-content-botbox" v-for="bot in botcontInfo">
				<h3 class="landscape-content-title">{{bot.bottitle}}</h3>
				<h5 class="landscape-content-stitle">{{bot.botstitle}}</h5>
				<p class="stitle-con" v-html="bot.botscontent"></p>
				<h5 class="landscape-content-stitle">{{bot.botnextstitle}}</h5>
				<p class="stitle-con" v-html="bot.botnextscontent"></p>
				<h5 class="landscape-content-stitle">{{bot.botnextstitles}}</h5>
				<p class="stitle-con" v-html="bot.botnextscontents"></p>
			</div>
    	</div>
    </div>
</template>
<script>
export default {
 	data() {
        return {
            contentsInfo:[],
            botcontInfo:[],
            id: localStorage.id,
            title: localStorage.title,
       		src: localStorage.src,
       		newPrice: localStorage.newPrice,
       		oldPrice: localStorage.oldPrice,
       		imgs: localStorage.imgs.split(",")
        }
    },
    created() {
        this.$http.get('/static/weekdetail.json').then(response => {
            this.data = response.body.data;
            this.contentsInfo = this.data.contentsInfo;
            this.botcontInfo = this.data.botcontInfo;
        },response => {
            console.log("ajax error");
        });
    }
}
</script>
<style scoped>
	@import "../../../assets/font/iconfont.css";
	.landscape {
		width:100%;
		height:100%;
		background:#f1f5f6;
	}
	.landscape-header {
		position:relative;
		width:100%;
		height:.88rem;
		background:#00bcd4;
	}
	.landscape-header-return {
		position:absolute;
		top:.2rem;
		left:.1rem;
		font-size:.5rem;
		color:#fff;
	}
	.landscape-header-title {
		line-height: .88rem;
		margin:0 1rem;
		font-size:.32rem;
		text-align:center;
		color:#fff;
	}
	.landscape-content {
		width:100%;
		box-sizing: border-box;
		padding:.2rem .25rem;
	}
	.landscape-content-title::before {
		content: " ";
		position: absolute;
		top: .15rem;
		left: 0;
		width: .08rem;
		height: .25rem;
		background: #00bcd4;
		border-radius: .04rem;
	}
	.landscape-content-title {
		position:relative;
		line-height:.5rem;
		font-size:.33rem;
		padding-left:.2rem;
	}
	.content-box-title {
		line-height:.5rem;
	}
	.content-img-box {
		position:relative;
		width:100%;
		height:0;
		overflow: hidden;
		padding-bottom:58.7%;
		background: url(//simg1.qunarzz.com/piao/images/loading_camel.gif) no-repeat;
		background-position:center center;
	}
	.content-img {
		width:100%;
	}
	.content-img-title {
		position:absolute;
		bottom:0;
		left:0;
		width:100%;
		text-align: center;
		line-height:.5rem;
		color:#fff;
		background:rgba(0,0,0,.3);
	}
	.content-img-desc {
		line-height: .4rem;
		margin: .2rem 0;
	    color: #999;
	    font-size: .28rem;
	}
	.landscape-content-stitle{
		line-height:.5rem;
		font-size:.28rem;
	}
	.stitle-con{
		line-height: .4rem;
		margin-bottom: .2rem;
	    color: #999;
	    font-size: .28rem;
	   
	}
</style>
