<template>
    <header class="header">
        <router-link to="/theOneDayTrip">
            <a class="header-left iconfont">&#xe615;</a>
        </router-link>
        <div class="header-title">
            <span class="single-line"><span class="iconfont"></span>一日游</span>
        </div>
        <div class="header-right">
            <span class="nav-city">搜索<i class="downarrow"></i></span>
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
    @import "../../../../assets/font/iconfont.css";
    .header {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        text-align: center;
        color: #fff;
        z-index: 3;
    }
    .header-left {
        float: left;
        display: block;
        width: .4rem;
        line-height: .88rem;
        padding: 0 .1rem;
        color: #fff;
        font-size: .36rem;
        text-align: left;
        margin-left:.1rem;
    }
    .header-title {
        position: relative;
        height: .6rem;
        margin: .14rem 1rem .14rem .8rem;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .header-right{
        position: absolute;
        top: 0;
        right: 0;
        line-height: .88rem;
        width: 1.05rem;
        text-align: center;
    }
    .single-line {
        color: #ccc;
    }
</style>
