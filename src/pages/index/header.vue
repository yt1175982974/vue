<template>
  <header class="header">
    <a class="header-left iconfont">&#xe720;</a>
    <div class="header-title">
      <router-link to="/beforeSearch">
      <span class="single-line">
        <i class="iconfont icon-search">&#xe632;</i>
        <span>输入城市/景点/游玩主题</span>
      </span>
      </router-link>
    </div>
    <div class="header-right">
        <router-link to='/city'>
            <span class="nav-city">
                <span class="span-city"><!--{{$store.state.city}}-->北京</span>
                <span class="triangle"></span>
                <i class="downarrow"></i>
            </span>
        </router-link>
    </div>
    </header>
</template>

<script>
export default {
    data () {
        return {}
    }
//  methods: {
//      changeCity: function() {
//          this.$store.commit("changeCity", {city: "北京"});
//  //      this.$store.dispatch("fiveSecondsChangeCity",{
//  //          city:"云南"
//  //      });
//      }
//  }
}
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
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
    font-size: .34rem;
    text-align: left;
    font-weight: bold;
}
.header-title {
    float: left;
    position: relative;
    width: 68%;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
}
.header-right {
    position: absolute;
    top: 0;
    right: 0;
    line-height: .88rem;
    width: 1.5rem;
    text-align: center;
}
.triangle {
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid dashed dashed dashed;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    top: 19px;
}
.single-line {
    display: block;
}
.single-line span {
    width: 3.72rem;
    height: .6rem;
    color: #e4e7ea;
}
.nav-city {
    color: #fff;
    padding-right: .16rem;
}
</style>