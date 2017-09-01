<template>
	<div id="infoHtml">
		<settlementHeader />
		<Footerbuycard />
		<NumberComponent @numChange="handleReceiveNum" />
		<ToursInfo :num="num" />
		<Footerleft :num="num"/>
		<Footerright />
	</div>
</template>

<script>
	import NumberComponent from "./numberComponent.vue"
	import ToursInfo from './toursInfo.vue'
	import settlementHeader from "./settlementheader.vue"
	import Footerleft from "./footerleft.vue"
	import Footerright from "./footerright.vue"
	import Footerbuycard from "./footerbuycard.vue"
export default {
	name: "settlement",
	data() {
		return {
			num: 1,
			
		}
	},
	components: {
		Footerbuycard,
		NumberComponent,
		ToursInfo,
		settlementHeader,
		Footerleft,
		Footerright
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
#infoHtml {
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}



</style>
