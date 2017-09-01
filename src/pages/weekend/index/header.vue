<template>
  <header class="header">
    <a class="header-left iconfont">&#xe615;</a>
    <div class="header-right">
			<span class="nav-city header-title-extend">北京
			</span>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @import "../../../assets/font/iconfont.css";
  .header {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
  }

  .iconfont {
    color: #e4e7ea;
  }

  .icon-search {
    margin-left: -0.54rem;
  }

  .header-left {
    float: left;
    display: block;
    width: .4rem;
    line-height: .88rem;
    padding-right: 0.28rem;
    padding-left: 0.12rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
  }

  .header-title {
    float:left;
    position: absolute;
    left: .8rem;
    right: 1.2rem;
    width: auto;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
  }

  .header-right {
    position: absolute;
    top: 0;
    right: 50%;
 		margin-right:-.75rem;
    line-height: .88rem;
    padding: 0 .22rem;
    text-align: center;
  }
  .nav-city{
  	display: inline-block;
    position: relative;
    min-width: .88rem;
    height: .88rem;
    color: #fff;
  }
  .triangle{
    width:0;
    height:0;
    border-width:.12rem;
    border-style:solid dashed dashed dashed;
    border-color:#fff transparent transparent transparent;
    position: absolute;
    top: 0.38rem;
  }
  .single-line {
    display: block;
  }

  .single-line span {
    width: 3.72rem;
    height: .6rem;
    color: #e4e7ea;
  }
  .header-title-extend::after {
    content: ' ';
    overflow: hidden;
    position: absolute;
    top: .4rem;
    right: -.2rem;
    width: 0;
    height: 0;
    border: .1rem solid transparent;
    border-top: .15rem solid #fff;
    border-bottom-width: 0;
}
</style>
