   
<template>
	<div>
		<!--刘强 评论 start-->
		<router-link class="commentsInformation" to="/comment">
			<div class="commentsInfo">
				<span class="commentsInfo-score">4.7</span>
				<span class="commentsInfo-text">分</span>
				<span class="commentsInfo-tagscore">非常满意</span>
				<span class="commentsInfo-totalnum">
					用户评论（79）&nbsp;
					<span class="commentsInfo-rightarrow iconfont">&#xe649;</span>
				</span>
			</div>

			<div class="comments-item">
				<div class="comments-content">
					<div class="comments-top">
						<span class="comments-star iconfont">&#xe65b;&#xe65b;&#xe65b;&#xe65b;&#xe65b;</span>
						<span class="comments-date">{{indexInfo.account}}&nbsp;&nbsp;{{indexInfo.time}}</span>
					</div>
					<p class="comments-text">{{indexInfo.txt}}</p>
				</div>
			</div>
		</router-link>
		<!--刘强 评论 end-->
	</div>
</template> 
<script type="text/javascript">  
	export default {
		data() {
			return {
				indexInfo:{
					account: '',
					time: '',
					txt: ""
				}
			}
		},
		created() {
			this.$http.get('/static/comment/comment.json').then(response => {
				var data = response.body.data.indexInfo[0]; 
				this.indexInfo.account = data.account;
				this.indexInfo.time = data.time;
				this.indexInfo.txt = data.txt;
				 
			}, response => {
			   console.log("ajax error");
			});
		}
	} 
</script>
 
<style scoped>
	@import "../../../assets/font/iconfont.css";
	@import "../css/commentsInformation.css";
</style>
 
 
 



