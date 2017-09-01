   
<template>

    	<!--刘强 点评 start-->
      	<div class="commentBody">
      		<Commentheader />
			<div class="commentItems">
				<Commentitem :indexInfo="indexInfo"/>
			</div>

		</div> 
		<!--刘强 点评 end-->
</template> 
<script type="text/javascript">  
	import Commentheader from "./commentheader.vue";
	import Commentitem from "./commentitem.vue";
	
	export default { 
		components: {
			Commentitem: Commentitem,
			Commentheader: Commentheader,
		
		},
		data() {
			return {
				indexInfo: []
			}
		},
		created() {
			//console.log(this.$http);
			this.$http.get('/static/comment/comment.json').then(response => {
				//console.log(response);
				var data = response.body.data;
				this.indexInfo = data.indexInfo;
			}, response => {
			   console.log("ajax error");
			});
		}
	} 
</script>
 
<style scoped>
	@import "../../assets/font/iconfont.css";
	@import "../../assets/css/base/reset.css";
	@import "../../assets/css/common/border.css";
	.commentBody {
		background: #f5f5f5;
	}
</style>
 
 
 



