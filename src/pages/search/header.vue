<template>
  <header class="header">
    <a class="header-left iconfont" @click="handleGoBack">&#xe720;</a>
    <div class="header-title">
      <input type="text" class="search-input" placeholder="输入城市或景点">
    </div>
    <span class="header-right">
				<a class="search-submit">搜索</a>
			</span>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      handleGoBack: function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style>
	@import url("../../assets/font/iconfont.css");
	.header {
		position: relative;
	    z-index: 98;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.header-left {
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .12rem;
	    color: #fff;
	    font-size: .50rem;
	    text-align: left;
	}
	.header-title {
	    position: relative;
	    height: .6rem;
	    margin: .14rem 1rem .14rem .8rem;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
    }
    .search-input {
	    line-height: .4rem;
	    margin: .1rem .2rem;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	    color: darkgray;
	}
	.header-right {
		position: absolute;
		line-height: 0.88rem;
		right: .1rem;
		top: 0;
		text-align: center;
	}
	.search-submit {
	    display: inline-block;
	    width: .74rem;
	    color: #fff;
	    font-size: .28rem;
	}
</style>
