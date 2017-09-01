<template>

	<div id="footer">
	
		<div class="consult border-top" @click="handleConsult">
	
			<div class="iconfont">&#xe626;</div>
	
			<p class="text">咨询</p>
	
		</div>
	
		<div class="book-button-1" @click="handlebookButton1">立即预订</div>
	
		<transition name="alert">
	
			<FooterCheckInfo v-if="alertShow" :show="alertShow" :nowTime="nowTime" @handleAlertShow="handleAlertShow" />
	
		</transition>
	
		<transition name="consultAlert">
	
			<div class="alert-consult js-alert-consult" v-if="consultShow">
	
				<div class="consult-info">
	
					<div class="provide">供应商 : 国中青
	
						<span class="iconfont sp" @click="handleConsultClose">&#xe63f;</span>
	
					</div>
	
					<p class="p">咨询电话:
	
						<span>01089677900转41020</span>
	
					</p>
	
					<p class="p">服务时间:
	
						<span>08:00~20:00</span>
	
					</p>
	
					<div class="tip" v-if="isSleep">客服去休息啦，建议您在服务时间内再来哟！</div>
	
				</div>
	
				<div class="consult-method border-top">
	
					<div class="online border-right iconfont" @click="handleOnLine">&#xe626; 在线咨询</div>
	
					<div class="phone iconfont" @click="handleOnLine">&#xe612; 电话咨询</div>
	
				</div>
	
			</div>
	
		</transition>
	
	</div>
</template>
<script type="text/javascript">
import FooterCheckInfo from "./footer-checkinfo-component.vue";


export default {

	data() {
		return {
			nowTime: '',
			alertShow: false,
			consultShow: false,
			isSleep: ""
		}
	},

	components: {
		FooterCheckInfo: FooterCheckInfo
	},

	methods: {
		handleAlertShow(show) {
			this.alertShow = show;
			this.$emit("handleMarkLayer")
		},

		handlebookButton1() {
			this.alertShow = !this.alertShow;
			var info = {};
			info = JSON.stringify(info)
			if (!window.localStorage.info) {
				window.localStorage.info = info
			}

			this.$emit("handleMarkLayer", "block");
			this.nowTime = new Date().getHours();

		},

		handleConsult() {
			this.consultShow = !this.consultShow;
			this.$emit("handleMarkLayer", "block");
			this.nowTime = new Date().getHours();
			if (this.nowTime < 8 || this.nowTime > 20) {
				this.isSleep = true
			} else {
				this.isSleep = false
			}
		},

		handleConsultClose() {
			this.consultShow = !this.consultShow;
			this.$emit("handleMarkLayer", "none");
		},

		handleOnLine() {
			this.$router.push("/")
		}

	}

}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	@import "../css/border.css";
	@import "../css/footer-component.css";
</style>