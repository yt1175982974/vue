<template>
    <div>
        <img class="topic-img" alt="暑假嗨玩" src="//s.qunarzz.com/piao_topic/image/touch/custom/2016/1772travel10/170710/caption2.jpg" />
        <div id="recommen-content" class="recommen-content">
            <div id="filter-container" class="filter-container">
                    <dl class="filter-group">
                        <dt class="filter-label">玩法分类</dt>
                        <dd class="filter-value">
                            <div class="filter-list">
                                    <span class="filter-item filter-active">冲浪漂流</span>
                                    <span class="filter-item">峡谷风光</span>
                                    <span class="filter-item">水上乐园</span>
                                    <span class="filter-item">全部</span>
                            </div>
                        </dd>
                    </dl>
                    <dl class="filter-group">
                        <dt class="filter-label">推荐排序</dt>
                        <dd class="filter-value">
                            <div class="filter-list">
                                    <span class="filter-item filter-active">销量最高</span>
                                    <span class="filter-item">价格最低</span>
                                    <span class="filter-item">离我最近</span>
                                    <span class="filter-item">全部</span>
                            </div>
                        </dd>
                    </dl>
            </div>
            <ul class="sub-list">
                <li class="sub-item" v-for="item in recommenList">
                    <router-link to="/summerSale">
                        <div class="sub-show">
                            <img class="img-small" :alt="item.name" :src="item.imgUrl" />
                            <span class="sub-city">{{item.city}}</span>
                        </div>
                        <div class="sub-info">
                            <div class="sub-name">{{item.productName}}</div>
                            <div class="sub-price">
                                <strong class="sub-sale"><span class="price">¥<em class="price-num">{{item.price}}</em></span></strong>
                                <span class="sub-cost">票面价<span class="price">¥<em class="price-num">{{item.marketPrice}}</em></span></span>
                            </div>
                            <div class="sub-btn">立即预订</div>
                        </div>
                    </router-link>
                </li>
            </ul>
    </div>
    </div>
</template>
<script>
export default{
    props:["recommenList"],
    data() {
        return {}
    }
}
</script>
<style>
.filter-container {
    padding-bottom: .2rem;
}
.filter-fixed{
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    background: #28a3e1;
    padding: .2rem 0 .2rem;
    box-shadow: 0 0 0.2rem #000;
}
.filter-group {
    overflow: hidden;
    position: relative;
    margin: 0 .2rem;
    height: .44rem;
    padding: .13rem;
    background: #0b68e6;
    border-radius: 0 .7rem .7rem .08rem;
}
.filter-group:not(:first-child)::before {
    content: '';
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 2%;
    width: 92%;
    height: .02rem;
    background: #3984eb;
}
.filter-label {
    float: left;
    width: 1.24rem;
    height: .44rem;
    padding-right: .06rem;
    background: #4f9aff;
    color: #fff;
    font-style: italic;
    font-size: .26rem;
    line-height: .44rem;
    text-align: center;
    -webkit-border-radius: 0 .44rem .44rem 0;
    -moz-border-radius: 0 .44rem .44rem 0;
    -o-border-radius: 0 .44rem .44rem 0;
    border-radius: 0 .44rem .44rem 0;
}
.filter-value {
    overflow: hidden;
    height: .44rem;
    margin-left: 1.3rem;
}
.filter-list {
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    height: .8rem;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
}
.filter-item {
    display: inline-block;
    overflow: hidden;
    min-width: .52rem;
    height: .44rem;
    padding: 0 .08rem 0 .14rem;
    color: #fff;
    font-size: .26rem;
    line-height: .44rem;
    text-align: center;
}
.filter-active{
    color: #ffe800;
}
.sub-list{
    margin: 0 .2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.sub-item{
    width: 49%;
    border-radius: .06rem;
    background: #fff;
    margin-bottom: .2rem;
}
.sub-item:last-child{
    margin: 0;
}
.sub-show{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 61.6%;
    border-radius: .06rem .06rem 0 0;
}
.img-small{
    width: 100%;
    height: 2.5rem;
}
.sub-city{
    position: absolute;
    bottom: 0;
    left: .1rem;
    font-size: .24rem;
    line-height: .4rem;
    color: #fff;
}
.sub-info{
    position: relative;
    padding: .1rem .2rem;
    min-height: 1rem;
}
.sub-name {
    width: 100%;
    height: .72rem;
    overflow: hidden;
    margin-bottom: .06rem;
    color: #333;
    font-size: .24rem;
    line-height: .36rem;
}
.sub-price {
    overflow: hidden;
    height: .32rem;
}
.sub-btn {
    width: 100%;
    height: .5rem;
    background: #ff4c56;
    color: #fff;
    font-size: .28rem;
    line-height: .5rem;
    text-align: center;
    border-radius: .06rem;
    margin: .1rem 0;
}
.sub-sale {
    display: inline-block;
    font-size: .28rem;
    vertical-align: middle;
}
.sub-sale .price {
    color: #ff4c56;
}
.price {
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.price-num {
    font: .28rem Tahoma,Helvetica,sans-serif;
}
.sub-cost {
    display: inline-block;
    margin-left: .1rem;
    color: #aaa;
    font-size: .24rem;
    text-decoration: line-through;
    vertical-align: middle;
}
.sub-cashback {
    display: inline-block;
    overflow: hidden;
    margin-left: .1rem;
    height: .28rem;
    color: #ff4c56;
    font-size: .24rem;
    line-height: .28rem;
    vertical-align: middle;
}
</style>