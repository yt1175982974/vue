<template>
	<div>
		<div class="numberBox">
			<span class="numtitle">购买数量</span>
			<div class="inputBox">
				<span class="numButton" id="numBtnSub" :class="{'numButton-disable': decBtnFlag}" @click="handleClickSub">
					<span class="iconfont">&#xe63d;</span>
				</span>
				<input type="text" class="inputeItem" id="nowNum" v-model="num" @keyup="handleCheck" @blur="checkInput"></input>
				<span class="numButton" :class="{'numButton-disable': addBtnFlag}" @click="handleClickAdd" id="numBtnAdd">
					<span class="iconfont">&#xe623;</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			num: 1,
			decBtnFlag: true,
			addBtnFlag: false
		}
	},
	methods: {
		btnState() {
			if (this.num <= 1) {
				this.decBtnFlag =true;
			} else {
				this.decBtnFlag = false;
			}
			if (this.num >= 100) {
				this.addBtnFlag = true;
			} else {
				this.addBtnFlag = false;
			}
		},
		handleCheck(){
			if (this.num.length > 4) {
				this.num = this.num.substr(0, 4);
			}
			(this.num)&&(this.num = this.num.replace(/[^\d]/g, ""));
			this.btnState();
		},
		checkInput() {
			this.num = parseInt(this.num)
			if(this.num<=1) this.num=1;
			this.$emit("numChange", this.num)
		},
		handleClickSub(e) {
			this.num > 1 && this.num--;
			this.btnState();
			this.$emit("numChange", this.num)
		},
		handleClickAdd(e) {
			this.num < 9999 && this.num++;
			this.btnState();
			this.$emit("numChange", this.num)
		}
	},
	computed: {

	}
}
</script>

<style scoped>
 @import "../css/numberComponent.css"; 
@import "../../../assets/font/iconfont.css";
</style>
