<template>
	<div class="ticket-fixbooking-con">
		<div class="ticket-fixbooking-pricecon border-top">
			<span class="ticket-fixbooking-priceitem">
				价格
				<em class="ticket-fixbooking-priceicon">&yen;</em>
				<span class="ticket-fixbooking-price">35</span>
			</span>
		</div>
		<div class="ticket-fixbooking-btn" @click="handleOrderingClick">
			<a class="ticket-fixbooking-link">立即预定</a>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	
		    }
		},
		methods:{
            handleOrderingClick:function() { 
                this.$store.commit("changeIsPop");
                this.$store.commit("changeIsFadeIn");
                this.$store.commit("changeIsBlock");
            }
        }
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .ticket-fixbooking-con{
    	position: absolute;
    	z-index: 82;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	height: .88rem;
    	line-height: .88rem;
    	border-top: 1px solid #e0e0e0;
    }
	.ticket-fixbooking-pricecon{
		float: left;
		height: .88rem;
		width: 56%;
		background: #fff;
		color: #ff8300;
		text-indent: .2rem;
		position: relative;
	}
	.ticket-fixbooking-priceitem{
		color: #616161;
		line-height: .88rem;
		font-size: .28rem;
	}
	.ticket-fixbooking-priceicon{
		margin-left: .1rem;
		color: #ff8300;
		font-size: .24rem;
	}
	.ticket-fixbooking-price{
		margin-right: .1rem;
		font-size: .4rem;
		color: #ff8300;
	}
	.ticket-fixbooking-btn{
		overflow: hidden;
		width: 44%;
		height: .88rem;
		background: #ff9800;
		font-size: .36rem;
		text-align: center;
	}
	.ticket-fixbooking-link{
		display: block;
		color: #fff;
	}
</style>
