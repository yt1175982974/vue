<template>
    <div class="container">
    <img class="topic-img" alt="戏水大作战" src="//s.qunarzz.com/piao_topic/image/touch/custom/2016/1772travel10/170710/caption1.jpg" />
    <ul class="list">
        <li class="item" v-for="item in majorList" key="item.id">
            <router-link to="/summerSale">
                <div class="product-show">
                    <img class="topic-img" :alt="item.name" :src="item.imgUrl" />
                    <span class="product-desc">
                        <strong class="product-in">{{item.name}}</strong>
                    </span>
                    <span v-show="item.tag" class="product-flag">
                        <em class="product-tag">{{item.tag}}</em>
                    </span>
                </div>
                <div class="product-info">
                    <div class="product-name">{{item.productName}}</div>
                    <div class="product-price">
                        <strong class="product-sale"><span class="price">¥<em class="price-num">{{item.price}}</em></span></strong>
                        <span class="product-cost">票面价<span class="price">¥<em class="price-num">{{item.marketPrice}}</em></span></span>
                    </div>
                    <div class="product-btn">立即预订</div>
                </div>
            </router-link>
        </li>
    </ul>
    </div>
</template>
<script>
export default{
    name:"majorList",
    props:["majorList"],
    data() {
        return {}
    }
}
</script>
<style>
.list{
    margin: 0 .2rem;
}
.item{
    width: 100%;
    border-radius: .06rem;
    background: #fff;
    margin-bottom: .2rem;
}
.item:last-child{
    margin: 0;
}
.product-show{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 46%;
}
.product-flag {
    position: absolute;
    top: .12rem;
    left: .12rem;
    width: 90%;
}
.product-tag {
    display: inline-block;
    overflow: hidden;
    margin: 0 .06rem .06rem 0;
    max-width: 50%;
    height: .32rem;
    border: .02rem solid #3dc929;
    padding: 0 .08rem;
    background: rgba(98,212,79,.7);
    color: #fff;
    font-weight: bold;
    font-size: .28rem;
    line-height: .32rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: .04rem;
}
.product-desc{
    width: 100%;
    position: absolute;
    text-align: center;
    top: 50%;
    color: #fff;
}
.product-in {
    display: block;
    font-weight: bold!important;
    font-size: .4rem;
    line-height: .58rem;
    text-shadow: 0 0 0.06rem rgba(0,0,0,1);
}
.product-info{
    position: relative;
    padding: .1rem .2rem;
}
.product-name {
    margin-bottom: .06rem;
    color: #333;
    font-size: .28rem;
    line-height: .4rem;
}
.product-price {
    overflow: hidden;
    height: .52rem;
}
.product-btn {
    position: absolute;
    right: .2rem;
    bottom: .12rem;
    margin-top: -.3rem;
    width: 1.3rem;
    height: .5rem;
    background: #ff4c56;
    color: #fff;
    font-size: .28rem;
    line-height: .5rem;
    text-align: center;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
}
.product-sale {
    display: inline-block;
    font-size: .28rem;
    vertical-align: middle;
}
.product-sale .price {
    color: #ff4c56;
}
.price {
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.product-sale .price-num {
    font-size: .4rem;
}
.price-num {
    font: .28rem Tahoma,Helvetica,sans-serif;
}
.product-cost {
    display: inline-block;
    margin-left: .1rem;
    color: #aaa;
    font-size: .24rem;
    text-decoration: line-through;
    vertical-align: middle;
}
.product-cashback {
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