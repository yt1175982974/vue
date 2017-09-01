<template>
    <div class="footerright iconfont">
		<div class="submit">提交订单</div>           
    </div>
</template>
<script>
	export default {
	    data() {
	        return {}
	    }
	}
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.footerright{
	    width: 50%;
	    float: right;
	    height: 0.88rem;
	    border-top: 0.01rem solid #ddd;
	    position: fixed;
	    bottom: 0;
	    right: 0;
	    background:orange;
	    color: white;
	    z-index: 10;
	}

	.submit{
	    line-height: 0.88rem;
	    height: 0.88rem;
	    margin:0 auto;
	    text-align: center;
	}

</style>