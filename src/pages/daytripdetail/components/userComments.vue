   
<template>
	<!--刘强 用户评论 start-->
	<div>
		<div class="userComments">
			<div class="userComments-title">
				<h3 class="userComments-titleH3">用户评论</h3>
			</div>
			<div class="userComments-items" v-for="(item, idex) in indexInfo" :key="item.id">
				<div class="userComments-content">
					<div class="userComments-top">
						<span class="userComments-star iconfont">&#xe65b;&#xe65b;&#xe65b;&#xe65b;&#xe625;</span>
						<span class="userComments-date">{{item.account}}&nbsp;&nbsp;{{item.time}}</span>
					</div>
					<p class="userComments-text">{{item.txt}}</p>
					<div class="userComments-images" v-if="item.boolean">
						<img class="userComments-img" v-for="(itemimg, imgindex) in item.img" :src="item.img[imgindex]" alt="" />
					</div>
				</div>
			</div>
			<div class="userComments-more">
				<router-link to="/comment">
					<div class="userComments-moreA">查看更多评论
						<span class="userComments-Arrow iconfont">&#xe649;</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
	<!--刘强 用户评论 end-->
</template> 
<script type="text/javascript">  

export default {
	data() {
		return {
			indexInfo: []
		}
	},
	created() {
		this.$http.get('/static/comment/comment.json').then(response => {
			var data = response.body.data;
			this.indexInfo = data.indexInfo.splice(1, 2);
		}, response => {
			console.log("ajax error");
		});
	}
} 
</script>
 
<style scoped>
@import "../../../assets/font/iconfont.css";
@import "../css/userComments.css";
</style>
 
 
 



