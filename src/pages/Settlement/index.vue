<template>
	<div id="infoHtml">
		<div class="bgMask"></div>
		<settlementHeader />
		<Footerbuycard/>
		<NumberComponent @numChange="handleReceiveNum" />
		<ToursInfo :num="num" />
		<Footerleft :num="num"/>
		<Footerright />
	</div>
</template>

<script>
	import NumberComponent from "./components/numberComponent.vue";
	import ToursInfo from './components/toursInfo.vue';
	import settlementHeader from "./components/settlementheader.vue";
	import Footerleft from "./components/footerleft.vue";
	import Footerright from "./components/footerright.vue";
	import Footerbuycard from "./components/footerbuycard.vue"
export default {
	name: "settlement",
	data() {
		return {
			num: 1
		}
	},
	components: {
		Footerbuycard,
		NumberComponent,
		ToursInfo,
		settlementHeader,
		Footerleft,
		Footerright,
		Footerbuycard
	},
	methods: {
		// 事件监听 改变num 并传给子组件
		handleReceiveNum(num) {
			this.num = num;
		}
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
#infoHtml{
	padding-bottom: 1.4rem;
}

.bgMask{
	background: #f5f5f5;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -10;
} 
</style>	
