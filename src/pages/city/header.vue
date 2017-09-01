<template>
    <header class="header">
        <span class="header-left iconfont" @click="handleClickBack">&#xe720;</span>
        <div class="header-city">
            <div class="header-btn" @click="handleClickDomestic" :class="{'header-city-active': isDomestic}">国内</div><div class="header-btn" @click="handleClickAbroad" :class="{'header-city-active': !isDomestic}">海外</div>
        </div>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                isDomestic:this.$store.state.flag
            }
        },
        methods:{

            handleClickDomestic:function() {
               this.isDomestic = false;
               this.$store.commit('switchData',false);
               document.body.scrollTop = 0;
            },

            handleClickAbroad:function() {
                this.isDomestic = true;
                this.$store.commit('switchData',true);
                document.body.scrollTop = 0;
            },

            handleClickBack() {
                window.history.back();
            }

        }        
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .header {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        overflow: hidden;
        text-align: center;
        background: #00bcd4;
        color: #fff;
    }
    .header-left {
        display: block;
        float: left;
        width: .4rem;
        padding: 0 .2rem;
        line-height: .88rem;    
        text-align: left;
        color: #fff;
        font-size: .36rem;
    }
    .header-city {
        width: 4.04rem;
        height: .6rem;
        display: inline-block;
        text-align: center;
        margin-top: .16rem;
        border: 1px solid #fff;
        border-radius: .06rem;
    }
    .header-btn {
        display: inline-block;
        width: 50%;
        height: 100%;
        line-height: .6rem;
        border: none;
        background: #fff;
        color: #00bcd4;
    }
    .header-btn:nth-child(1) {
        border-radius: .06rem 0 0 .06rem;
    }
    .header-btn:nth-child(2) {
        border-radius: 0 .06rem .06rem 0;
    }
    .header-city-active {
        background: #00bcd4;
        color: #fff;
    }
</style>