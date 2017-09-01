<template>
	<div id="root">
		<header>
			<span class="iconfont fanhui">&#xe648;</span>
			<h4>门票特卖</h4>
		</header>
		<div id="fixed" class="div-absolute" @scroll="handleScroll">
			<p>促销门票</p>
			<p></p>
			<p>北京</p>
		</div>
		<section id="ele">
			<inf></inf>
			<div class="footer">
				<span class="iconfont tanhao">&#xe603;</span>
				<strong>票面价</strong>是指通过景区指定窗口售卖的纸质门票上标注的价格
			</div>
		</section>
		
	</div>
</template>
<script>
import Inf from './inf.vue'
  export default {
    name: 'surpriseTicket',
    data () {
      return {
      }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods:{
        handleScroll(){
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            aFixed = document.getElementById("fixed");
            if(scrollTop >= 45){
                aFixed.className = "div-fixed";
            }else{
                aFixed.className = "div-absolute";           	
            }
        }
    },
    components:{
    	inf:Inf
    }
  }
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../assets/css/base/reset.css";

html,body{
	width: 100%;
	height: 100%;
}

body{
	position: relative;
}

header{
	border-bottom: #1b7a8b 1px solid;
	height: 0.88rem;
	background: #1ba9ba;
	position: relative;
	margin: 0;
	z-index: 91;
	display: block;
}

header h4{
	overflow: hidden;
	margin: 0 1rem;
	line-height: .88rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: .32rem;
	text-align: center;
	color: #fff;
	font-weight: normal;
}

.fanhui{
	position: absolute;
	left: 0;
	top: 0;
	width: .84rem;
	height: .88rem;
	line-height: .88rem;
	text-align: center;
	font-size: .36rem;
	color: #fff;
}

#fixed{
	height: 0.88rem;
	width: 100%;
	background: #fff;
	z-index: 100;
}

.div-absolute{
	height: 0.88rem;
	width: 100%;
	background: #fff;
	position: relative;
}

.div-fixed{
	position: fixed;
	top:0;
}

#fixed p{
	line-height: 0.88rem;
}

#fixed p:nth-child(1){
	float: left;
	font-size: 0.3rem;
	color: #333;
	padding-left: 0.19rem;
	font-weight: 600;
}

#fixed p:nth-child(2){
	float: right;
	display: block;
	width: 0;
    height: 0;
    border-left: 0.08rem solid transparent;
    border-right: 0.08rem solid transparent;
    border-top: 0.1rem solid #666;
    position: absolute;
    top: 0.42rem;
    right: 0.2rem
}

#fixed p:nth-child(3){
	display: block;
	float: right;
	padding-right: 0.4rem;
}

section{
	display: block;
	position: absolute;
	top:1.76rem;
	width: 100%;
}

.footer{
	margin-top: .2rem;
	padding-bottom: .2rem;
	background: #fff;
	color: #333;
	font-size: .24rem;
	line-height: .3rem;
	position: absolute;
	bottom: -1rem;
	display: block;
	width: 100%;
	border-color: #cbccce;
}

.tanhao{
	font-size: .28rem;
	vertical-align: -.04rem;
}

strong{
	font-weight: bold;
}

</style>
