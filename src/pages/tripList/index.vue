<template>
  <div class="main">
      <div class="header">
           <router-link to="/"><i class="iconfont back">&#xe615;</i></router-link>
          <span class="title">学生最爱的博物馆</span>
      </div>
      <div class="item" v-for="item in items">
          <div class="img-box" @click="handleClick">
              <img class="img" :src="item.imgUrl" :data-id="item.id" :alt="item.name" :title="item.name" />
          </div>
          <div class="info">
              <p class="name">{{ item.name }}</p>
              <p class="discription">{{ item.discription }}</p>
              <div class="price-box">
                 <p v-if="item.price"><i class="symbol">&yen;</i><em class="price">{{item.price}}</em><span>起</span></p>
                 <p v-else>查看详情</p>
              </div>

          </div>

      </div>
      <div v-show="isShow" @click="handleClick" @touchmove.prevent class="mark-info">
          <p class="select-title">{{select(selectItem).name}}</p>
          <p class="select-discription">{{select(selectItem).discription}}</p>

      </div>
  </div>
</template>

<script>
export default {
    name: 'toSku',

    methods:{
        handleClick(e) {
            this.isShow=!this.isShow;
            this.selectItem=e.target.getAttribute("data-id");
        },
        select(id){
            id=id?id:1;
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].id==id){
                    return this.items[i];
                }
            }

        }
    },
    computed:{

    },
    data () {
        return {
            isShow:false,
            selectItem:"",
            items:[{
                id:"1",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1501/28/2874bfd7fa4c5291.water.jpg_640x276_37669ce6.jpg",
                name:"中国航空博物馆",
                discription:"亚洲最大以飞机文物为主的航空珍品荟萃地",
                price:"112"
            },{
                id:"2",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1501/8d/8d99565a2dea08e7.water.jpg_640x276_188d04d3.jpg",
                name:"中国蜜蜂博物馆",
                discription:"小昆虫大视界",
                price:""
            },
            {
                id:"3",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1602/e6/e655d7ee86c7fd1390.water.jpg_640x276_8b20ff5e.jpg",
                name:"中国科学技术馆",
                discription:"科学性、知识性、趣味性、互动性相结合的展",
                price:"198"
            },
            {
                id:"4",
                imgUrl:"http://img1.qunarzz.com/sight/p25/201211/00/8a09e85dceb22cea93835fbb.jpg_640x276_b3ed91d8.jpg",
                name:"北京自然博物馆",
                discription:"打开通往自然的大门，去探索大自然的奥秘",
                price:""
            },
            {
                id:"5",
                imgUrl:"http://img1.qunarzz.com/sight/p81/201211/07/453d7d250c21a48693835fbb.jpg_640x276_23654982.jpg",
                name:"中国古动物馆",
                discription:"亚洲最大的古生物博物馆",
                price:"112"
            },
            {
                id:"6",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1705/3d/3d7d3740d157a9e9a3.img.jpg_640x276_2ed89e4c.jpg",
                name:"首都博物馆",
                discription:"古老与现代并存，文明与科技兼顾",
                price:""
            },
            {
                id:"7",
                imgUrl:"http://img1.qunarzz.com/wugc/p153/201204/20/18790ec397b2afe193835fbb.jpg_640x276_00c86e9b.jpg",
                name:"中国国家博物馆",
                discription:"历史与艺术并重，凝聚中国历史文化之精华",
                price:"1"
            },
            {
                id:"8",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_640x276_f74664c2.jpg",
                name:"北京天文馆",
                discription:"陪你去看流星雨落在这地球上",
                price:"137"
            },
            {
                id:"9",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/59/76e0dc86d4416f913d9d919ec79ffe0e.water.jpg_640x276_11e979a9.jpg",
                name:"北京汽车博物馆",
                discription:"感受汽车的无穷魅力，享受汽车的无限乐趣",
                price:"21"
            },
            {
                id:"10",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1501/91/913a6c6e45ea135b.water.jpg_640x276_e91e3e8e.jpg",
                name:"警察博物馆",
                discription:"首都公安的巨大贡献和取得的辉煌成就",
                price:"112"
            }]
        }
    }

}
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
.main{
    background: #f5f5f5;
}
.mark-info{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    right: 0;
    bottom: 0;
    left:0;

    background: rgba(2, 5, 5,0.6);
    color: #fefefe;
    z-index: 100;
}
.back{
    position: absolute;
    top: 0;
    left:0;
    padding-left: .22rem;
    line-height: .88rem;
    font-size: .36rem;
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
    background: #00bcd4;
}
.item{
    background: #fff;
    margin-bottom: .2rem;
}
.img-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 43.37288%;
}
.img{
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
