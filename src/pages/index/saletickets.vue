<template>
    <div>
        <div class="ticket-container">
            <div class="sale-location">
                <span class="iconfont">&#xe605;</span>
                定位失败
            </div>
            <div class="sale-location nine-tickets">
                <span class="iconfont">&#xe60d;</span>
                9元门票
            </div>
        </div>
        <div class="sale"></div>
    </div>
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
    .ticket-container {
        width: 100%;
        height: .98rem;
        margin-top: .2rem;
    }
    .sale-location {
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: .98rem;
        float: left;
        color: #212121;
        font-size: .28rem;
    }
    .sale {
        width: 100%;
        height: 1.4rem;
        background:url(http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png) center center no-repeat;
        background-size:auto 100%;
        border-top: .18rem solid #f5f5f5;        
    }
</style>