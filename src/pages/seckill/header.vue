<template>
    <header class="seckill-header">
        <router-link to='/'>
            <div class="header-content">
                <a class="header-back iconfont">&#xe615;</a>
                <h1 class="header-title">一元秒杀！门票绝对低价！</h1>
                <a class="header-bar iconfont"><span class="header-bar-icon">&#xe607;</span><span class="header-bar-font">首页</span></a>
            </div>
        </router-link>
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

    @import "../../assets/font/iconfont.css";

    .header-content {
        position: relative;
        width: 100%;
        line-height: .88rem;
        text-align: center;
        border-bottom: #1b7a8b .02rem solid;
        background: #1ba9ba;
        font-size: .32rem;
    }

    .iconfont {
        color: #fff;
    }

    .header-back, .header-bar {
        position: absolute;
        top: 0;
        width: .88rem;
        line-height: .88rem;
    }

    .header-back {
        display: block;
        left: 0;
    }

    .header-title {
        overflow: hidden;
        margin:0 1rem;
        text-align: center;
        font-size: .32rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
    }

    .header-bar {
        right: .3rem;
        font-size: .24rem;
    }
    .header-bar-icon {
        position: absolute;
        right: .06rem;
        top: 0;
        display: block;
        padding-top:.1rem;
        height: .4rem;
        line-height:1;
        font-size: .48rem;
    }
    .header-bar-font {
        position: absolute;
        right: .05rem;
        top: .25rem;
        display: block;
        height: .4rem;
        font-size: .24rem;
    }
</style>
