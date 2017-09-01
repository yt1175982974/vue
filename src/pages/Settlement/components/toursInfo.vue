<template>
	<div class="tourInfoCom">
		<form action="" method="post">
			<div v-for="infoNum of this.num " class="infoBox">
				<div class=" infoItemBox">
					<span class=" infoItemTitle">游客{{infoNum}}</span>
					<input type="text" placeholder="游客姓名" class="tourNameInput infoInput" />
				</div>
				<div class=" infoItemBox">
					<span class=" infoItemTitle">手机号</span>
					<input type="text" placeholder="请输入手机号" class="tourTelInput infoInput">
				</div>
			</div>
		</form>
		<div class="tipBox">
				<span class="leftTip">登录后购买产品返代金券3元 <a href="javascript:;" class="tipA">代金券使用规则</a></span>
				<a href="javascript:;" class="rightTip tipA">咨询电话</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ["num"]
}
</script>

<style scoped>
 @import "../css/tourInfo.css"; 
</style>

