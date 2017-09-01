<template>
  <div class="main" @scroll="handleScroll">
      <div class="header">
          <router-link to="/"><i class="iconfont back">&#xe615;</i></router-link>
          <span class="title">暑期大放价</span>
          <router-link to="/">
              <div class="index">
                  <i class="iconfont index-icon">&#xe607;</i>
                  <span>首页</span>
              </div>
          </router-link>
      </div>
      <div class="content">
          <div class="img-box">
              <img class="topic-img" alt="暑期大放价 " src="//img1.qunarzz.com/piao/fusion/1707/5c/d2562a5021bff502.jpg">
          </div>
          <City></City>
          <majorList :majorList="items"></majorList>
          <recommenList :recommenList="items"></recommenList>
      </div>
  </div>
</template>

<script>
import City from "./citySelect"
import majorList from "./majorList"
import recommenList from "./recommendList"
export default {
    name: 'summerSale',
    components:{
        majorList,
        recommenList,
        City
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods:{
        handleScroll(){
            let scrollTop=document.body.scrollTop,
                filterContainer=document.getElementById("filter-container"),
                Container=document.getElementById("recommen-content"),
                offsetTop=Container.offsetTop;
            if(scrollTop>=offsetTop){
                filterContainer.className="filter-fixed";
            }else{
                filterContainer.className="filter-container";
            }
        }
    },
    computed:{
    },
    data () {
        return {
            isPage:true,
            items:[{
                id: 1,
                name:"十渡爱琴海薰衣草庄园",
                productName:"【活动票】爱琴海薰衣草庄园成人特惠票（下午场）",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1706/61/61cbf3401445d0fca3.img.jpg_600x276_f10389c3.jpg",
                tag:"特惠票",
                price: "9.9",
                marketPrice: "35",
                city:"北京"
            },{
                id: 2,
                name:"北京欢乐谷",
                productName:"北京欢乐谷夜场-七夕成人票",
                imgUrl:"https://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x276_279d00ac.jpg",
                tag:"促销票",
                price: "29.9",
                marketPrice: "180",
                city:"北京"
            },{
                id: 3,
                name:"北京海洋馆",
                productName:"【限量抢购】北京海洋馆七夕晚场成人特惠票（含自助餐）",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x276_60f6d176.jpg",
                tag:"5折",
                price: "163",
                marketPrice: "165",
                city:"北京"
            },{
                id: 4,
                name:"十渡风景区",
                productName:"十渡誓言玻璃栈道成人票",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_600x276_5663e57f.jpg",
                tag:"",
                price: "40",
                marketPrice: "50",
                city:"北京"
            },{
                id: 5,
                name:"雾灵西峰高山滑水",
                productName:"北京雾灵西峰高山滑水成人票（下单成功4小时后生效）",
                imgUrl:"https://img1.qunarzz.com/sight/p0/1506/ea/55a4d88885163b9e31eb57992ea41846.water.jpg_600x276_cc1bc90d.jpg",
                tag:"5折",
                price: "35",
                marketPrice: "40",
                city:"北京"
            },{
                id: 6,
                name:"水立方游泳馆",
                productName:"水立方参观+游泳【无需预约】",
                imgUrl:"https://img1.qunarzz.com/sight/p0/201311/05/35b6bc005c46f573c8d65eac.jpg_600x276_f82f999d.jpg",
                tag:"",
                price: "48",
                marketPrice: "60",
                city:"北京"
            },{
                id: 7,
                name:"奥普乐主题运动乐园",
                productName:"奥普乐主题水世界乐园单人票（周末节假日通用）",
                imgUrl:"https://img1.qunarzz.com/sight/p0/1606/d1/d1b94d9874e8815590.img.jpg_600x276_912e6afb.jpg",
                tag:"",
                price: "56",
                marketPrice: "128",
                city:"北京"
            },{
                id: 8,
                name:"蟹岛城市海景水上乐园",
                productName:"北京蟹岛城市海景乐园—周末成人票",
                imgUrl:"https://img1.qunarzz.com/sight/p0/1506/2f/2ff43e5b56721002.water.jpg_600x276_e17ce2bf.jpg",
                tag:"",
                price: "52",
                marketPrice: "60",
                city:"北京"
            },{
                id: 9,
                name:"小汤山温泉度假区",
                productName:"温都水城两馆通票（温泉养生馆+HI水空间）",
                imgUrl:"https://img1.qunarzz.com/sight/p0/1608/cd/cdf33f046a958873a3.water.jpg_600x276_53c0fc26.jpg",
                tag:"",
                price: "127",
                marketPrice: "178",
                city:"北京"
            }]
        }
    }
}
</script>

<style>
@import "../../assets/font/iconfont.css";
.main{
    background: #28a3e1;
    overflow: hidden;
}
.back{
    width: .88rem;
    position: absolute;
    top: 0;
    left:0;
    line-height: .88rem;
    font-size: .34rem;
}
.index{
    width:.88rem;
    height: .88rem;
    position: absolute;
    right: 0;
    top: .1rem;
    font-size: .24rem;
}
.index-icon{
    width: 100%;
    font-size: .5rem;
    display: inline-block;
    color: #fff;
}
.title{
    font-size: .32rem;
    line-height: .88rem;
}
.header{
    width:100%;
    height: .88rem;
    color: #fff;
    text-align: center;
    background: #1ba9ba;
    border-bottom: #1b7a8b .02rem solid;
}
.item{
    background: #fff;
    margin-bottom: .2rem;
}
.img-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 78.4%;
}
.topic-img{
    width: 100%;
    vertical-align: middle;
}
.info{
    padding:.15rem .22rem .2rem;
    position: relative;
}
.name{
    color: #212121;
    font-size: .36rem;
    line-height: .54rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.discription{
    color: #616161;
    line-height: .45rem;
    font-size: .26rem;
    margin: 0;
    padding: 0;
}
.price-box{
    position: absolute;
    top: .25rem;
    right: .2rem;
    color: #616161;
    font-size: .22rem;
}
.symbol{
    color: #ff8300;
    font-size: .18rem;
}
.price{
    color: #ff8300;
    font-size: .4rem;
    margin: 0 .04rem;
    font-weight: bold;
}
.select-title{
    font-size: .4rem;
    text-align: center;
    margin-top: .5rem;
}
.select-discription{
    font-size: .28rem;
    margin-top: .3rem;
    text-align: center;
}
.router-link-active{
    color: #fff;
}
</style>