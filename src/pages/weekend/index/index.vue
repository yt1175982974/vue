<template>
	<div class='weekend-main' @touchstart='start' @touchmove='load'>
		<index-header></index-header>
	    <index-category></index-category>
	    <index-nearcity></index-nearcity>
	    <index-groupconr></index-groupconr>
		<weekend-products :info='info' :isloading='isloading'></weekend-products>
	</div>
</template>

<script>
	import IndexHeader from './header.vue'
 	import CategoryContainer from './category-container.vue'
  	import NearcityContainer from './nearcity-container.vue'
  	import WeekendGroupconr from './weekend-groupconr.vue'
	import weekendProducts from './weekend-products.vue'
	export default {
		created() {
			this.getWeekendData()
		},

		data() {
			return {
				info: [],
				isloading: false,
				bool: true
			}
		},
		components: {
			"index-header": IndexHeader,
     		"index-category":CategoryContainer,
      		"index-nearcity":NearcityContainer,
      		"index-groupconr":WeekendGroupconr,
			"weekend-products": weekendProducts
		},
		
		methods: {

			getWeekendData: function() {
				this.$http.get('/static/weekendIndex.json').then(response => {
					var data = response.body.data;
					 
					
					for(var i = 0; i < data.info.length; i++) {
						this.info.push(data.info[i])
					}
 
					this.isloading = false;
					this.bool = true
				}, response => {
					console.log("ajax error");
				});
			},

			start: function(e) {
				this.touchY = e.changedTouches[0].clientY
			},

			load: function(e) {
				var weekendList = document.getElementsByClassName('weekend-main')[0],
					offsetHeight = document.documentElement.offsetHeight,
					scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

				this.nextTouchY = e.changedTouches[0].clientY
				this.dragDistance = this.nextTouchY - this.touchY

				if(weekendList.scrollHeight - offsetHeight - scrollTop <= 250 && (this.dragDistance < -100) && this.bool) {
					this.bool = false;
					setTimeout(function(){
						this.getWeekendData();
					}.bind(this),1000);
					
					this.isloading = true;
					
				}

			}
		}
	}
</script>

<style scoped>
	.weekend-main{
		position: absolute;
		left: 0;
		top: 0;
		background: #f1f5f6;
	}
</style>
 

