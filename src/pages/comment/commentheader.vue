   
<template>

    	<!--刘强 点评 start-->
      	<div class="commentBody">
      		
			<div class="commentheader">
				<router-link to="/daytripdetail">
					<div class="commentheader-arrow iconfont" >&#xe615;</div>
				</router-link>
				<h1 class="commentheader-title">点评</h1>
			</div>

		</div> 
		<!--刘强 点评 end-->
</template> 
<script type="text/javascript">  
	export default { 
		data() {
			return {
				 
			}
		}
	} 
</script>
 
<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.commentheader {
		width: 100%;
		height: .88rem;
		position: relative;
		background: #00bcd4;
		z-index: 9;
	}
	.commentheader-arrow {
		float: left;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		font-size: .36rem;
		color: #fff;
	}
	.commentheader-title {
		height: .88rem;
		margin: 0 1rem;
		line-height: .88rem;
		font-size: .32rem;
		text-align: center;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;	
	}
</style>
 
 
 



