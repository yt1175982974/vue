<template>
	<div class="tourInfoCom">
		<form action="" method="post">
			<div v-for="infoNum of this.num " class="infoBox">

				<div class="group border-top">
					<div class="row">
						<label class="row-field" for="traveler_info_name_0">游客{{infoNum}}</label>
						<div class="row-value row-error">
							<label class="textinput-note" id="traveler_info_name_0_label" for="traveler_info_name_0" style="display: none; top: 1px; left: 0px;">游客姓名</label>
							<input class="textinput" type="text" id="traveler_info_name_0" placeholder="游客姓名">
						</div>
						<span class="iconfont border-left customer"></span>
					</div>
					<div class="row">
						<label class="row-field" for="traveler_info_phone_0">手机号</label>
						<div class="row-value country-code phone-filed row-error">
							<div id="pSelectCountryCode0">
								<span class="field-menu iconfont">+86&#xe649;</span>
								
							</div>
							<label class="textinput-note" for="traveler_info_phone_0" style="display: none; top: 1px; left: 0px;">请填写手机号</label>
							<input value="" class="textinput" type="text" id="traveler_info_phone_0" placeholder="请填写手机号">
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		props: ["num"]
	}
</script>

<style scoped>
	.infoBox {
		position: relative;
	    width: 100%;
	    margin: .2rem 0;
	    background: #fff;
	}
	.group {
		position: relative;
	    margin: .2rem 0;
	}
	.row {
	    position: relative;
	    background: #fff;
	    overflow: hidden;
	    min-height: .5rem;
	    padding: .24rem;
	}
	label {
	    cursor: default;
	}
	.row-field {
	    float: left;
	    width: 1.6rem;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .5rem;
	}
	.row-value {
		position: relative;
	    margin-left: 1.7rem;
	    line-height: .5rem;
	    font-size: .28rem;
	}
	.row-error {
	    color: red;
	}
	.row-error .textinput-note {
	    display: block;
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    background: #fff;
	    color: red;
	}
	.textinput, .textinput-note {
	    width: 100%;
	    height: .38rem;
	    padding: .06rem 0;
	    border: 0;
	    font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	    color: #212121;
	    background: 0;
	    -webkit-appearance: none;
	    -moz-appearance: none;
	}
	.row .customer {
	    position: absolute;
	    top: .26rem;
	    right: .2rem;
	    width: .4rem;
	    height: .5rem;
	}
	.customer {
	    display: inline-block;
	    color: #1ba9ba;
	    font-size: .32rem;
	    line-height: .5rem;
	    text-align: center;
	}
	.phone-filed {
	    margin-right: 1.2rem;
	}
	.country-code {
	    margin-left: 2.6rem;
	}

	.group .row::after {
	    content: "";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #e0e0e0;
	    transform: scaleY(.5);
	}
	.row::after {
	    background: #dadada;
	}
	.field-menu {
	    overflow: hidden;
	    position: absolute;
	    min-width: .24rem;
	    max-width: 1.4rem;
	    padding-right: .3rem;
	    border: .02rem solid #ccc;
	    color: #888;
	    font-size: .28rem;
	    line-height: .5rem;
	    text-indent: .1rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.country-code .field-menu {
	    right: 100%;
	    min-width: .4rem;
	    max-width: 1rem;
	    margin-right: .1rem;
	    padding: 0 .06rem;
	    text-align: right;
	    text-indent: 0;
	}
</style>

