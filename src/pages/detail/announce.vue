<template>
 	<div class="ticket-announce-con" id="ticket-announce-con">
		<div class="ticket-announce-inner">
			<span class="ticket-announce-icon iconfont">&#xe678;</span>
			【暑期促销】2017年8月25日-8月31日期间，购买水上乐园相关成人票（包含门票，套票，夜场票），每名购票成人可携带1名1.5米以下儿童免费入园（仅限水上乐园，其他园区不可携带，嘉宾票，教师和司机陪票，中小学生票，情侣票不享受此优惠）
			<span class="ticket-announce-closeicon iconfont">&#xe649;</span>
		</div>
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
	.ticket-announce-con{
		background: #fdeede;
		color: #f1441a;
		margin-bottom: .2rem;
		height: .88rem;
		line-height: .88rem;
		padding-left: .23rem;
	}
	.ticket-announce-inner{
		padding-right: .6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: relative;
	}
	.ticket-announce-icon{
		margin-right: .1rem;
	}
	.ticket-announce-closeicon{
		right: .2rem;
		position: absolute;
		top: .3rem;
		color: #c7bcaf;
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
