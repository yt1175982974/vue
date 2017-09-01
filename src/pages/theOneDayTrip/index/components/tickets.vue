<template>
	<div class="tickets">
		<div class="tickets-head">
			<h3 class="tickets-tittle">
				<span>—&nbsp;</span>北京热门经典门票<span>&nbsp;—</span>
			</h3>
		</div>
		<listComponent></listComponent>
		<a class="tickets-foot" href="javascript:;">
			查看全部景点
			<span class="iconfont">&#xe649;</span>
		</a>
	</div>
</template>

<script>
import listComponent from "./component-list2.vue"
	export default {
		name: 'IndexFooter',
		data () {
			return {}
		},
		components:{
			listComponent,
		}
	}
</script>


<style scoped>
	@import "../../../../assets/font/iconfont.css";
	.tickets {
		margin-top: .2rem;
		background: #fff;	
	}
	.tickets-head {
		padding: .3rem 0;
		text-align: center;
		border-bottom: .02rem solid #f5f5f5;
	}
	.tickets-tittle {
		position: relative;
		display: inline-block;
		color: #212121;
		font-size: .36rem;
		line-height: .36rem;
	}
	.tickets-tittle span {
		color: #c0c0c0;
	}
	.tickets-foot {
		display: block;
		color: #616161;
		font-size: .3rem;
		line-height: .9rem;
		text-align: center;
		background: #fff;
	}
</style>
