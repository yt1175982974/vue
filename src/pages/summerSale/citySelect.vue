<template>
    <div class="menu-outer"  v-bind:class="{ expand: isShow}" role="menuOuter" >
        <div class="menu-container" @click="handleClick" role="menuContainer">
            <div class="menu-current" role="menuCurrent">北京</div>
        </div>
    <ul v-show="isShow"  class="menu-list clrfix">
        <li v-for="item in cityItems" class="menu-item" key="item.id"><span class="menu-inner">{{item.name}}</span></li>
    </ul>
</div>
</template>
<script>
export default {
    name:"city",
    methods:{
        handleClick(){
            this.isShow=!this.isShow;
        }
    },
    data(){
        return {
            isShow:false,
            cityItems:[{
                id: 1,
                name: "北京"
            },{
                id: 2,
                name: "上海"
            },{
                id: 3,
                name: "天津"
            },{
                id: 4,
                name: "天津"
            },{
                id: 5,
                name: "四川"
            },{
                id: 6,
                name: "广东"
            },{
                id: 7,
                name: "浙江"
            },{
                id: 8,
                name: "山东"
            },{
                id: 9,
                name: "江苏"
            },{
                id: 10,
                name: "海南"
            },{
                id: 11,
                name: "广西"
            },{
                id: 12,
                name: "河北"
            },{
                id: 13,
                name: "吉林"
            },{
                id: 14,
                name: "陕西"
            },{
                id: 15,
                name: "福建"
            },{
                id: 16,
                name: "内蒙古"
            },{
                id: 17,
                name: "山西"
            },{
                id: 18,
                name: "甘肃"
            },{
                id: 19,
                name: "湖北"
            },{
                id: 20,
                name: "江西"
            },{
                id: 21,
                name: "贵州"
            },{
                id: 22,
                name: "安徽"
            },{
                id: 23,
                name: "云南"
            },{
                id: 24,
                name: "辽宁"
            },{
                id: 25,
                name: "黑龙江"
            },{
                id: 26,
                name: "湖南"
            },{
                id: 27,
                name: "河南"
            },{
                id: 28,
                name: "宁夏"
            },{
                id: 29,
                name: "西藏"
            },{
                id: 30,
                name: "新疆"
            }]
        }
    }
}
</script>
<style>
.menu-outer {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 0;
    line-height: 0;
}
.clrfix:after {
    content: "\0020";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
}
.menu-container {
    position: absolute;
    top: -.3rem;
    right: .2rem;
    min-width: .56rem;
    height: .56rem;
    padding-right: .46rem;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: .56rem;
    -moz-border-radius: .56rem;
    -o-border-radius: .56rem;
    border-radius: .56rem;
}
.menu-current {
    padding-left: .16rem;
    color: #fff;
    font-size: .28rem;
    line-height: .56rem;
    text-align: right;
}
.menu-container {
    position: absolute;
    top: -.3rem;
    right: .2rem;
    min-width: .56rem;
    height: .56rem;
    padding-right: .46rem;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: .56rem;
    -moz-border-radius: .56rem;
    -o-border-radius: .56rem;
    border-radius: .56rem;
}
.menu-container::after {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: .16rem;
    margin-top: -.12rem;
    width: .16rem;
    height: .16rem;
    border-width: 0 0 .02rem .02rem;
    border-style: solid;
    border-color: #fff;
    transform-origin: 25% 70%;
    transform: rotate(-45deg);
}

.expand .menu-container::after {
    transform: rotate(-225deg);
}
.menu-list {
    position: absolute;
    top: .2rem;
    left: 0;
    width: 100%;
    min-height: .6rem;
    padding: .1rem 0 .2rem;
    background: rgba(0,0,0,.5);
}
.menu-item {
    float: left;
    margin-top: .1rem;
    width: 25%;
}
.menu-selected .menu-inner {
    background: #3fc22b;
    color: #fff;
}
.menu-item:first-child .menu-inner {
    background: #3fc22b;
    color: #fff;
}
.menu-inner {
    display: block;
    margin: 0 .1rem;
    height: .6rem;
    background: #fff;
    color: #000;
    font-size: .24rem;
    line-height: .6rem;
    text-align: center;
    border-radius: .3rem;
}
</style>