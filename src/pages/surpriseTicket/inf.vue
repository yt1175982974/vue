<template>
    <ul>
      <li v-for="(item,index) in items">
        <div class="img">
          <img src="item.href" :src="item.href"/>
          <div class="remai">
            <span>热卖中</span>
          </div>
        </div>
        
        <div class="item-list">
        	<span class="item-text">{{item.text}}</span>
        	<div class="prices">
      			<span class="item-pirce-logo">¥<span class="item-pirce">{{item.price}}</span></span>
            <div class="item-realPrice-list">
              <span class="quan" v-show="item.isShow">
                <span class="return">赠券</span>
                <span class="price">¥<em>{{item.mon}}</em></span>
              </span>
              <span class="item-realPrice">¥{{item.realPrice}}</span>
            </div>	
      		</div>
      	</div>
      </div>
		</li>
	</ul>
</template>

<script>
const items=[{
  	href: "http://img1.qunarzz.com/sight/p0/1704/6c/6c8f90546cca86c8a3.img.jpg_640x266_3aa718bd.jpg",
  	text: "[北京]【1元秒杀】北京蟒山公园国际奇幻森林灯光节门票",
  	price: 1,
  	realPrice: 30,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1706/de/dee2af4ba016221ea3.img.png_640x266_b401bb3c.png",
  	text: "[北京]【去哪儿会员日】北京亲子畅玩卡（限量100张）",
  	price: 10.9,
  	realPrice: 108,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1706/61/61cbf3401445d0fca3.img.jpg_640x266_cc828462.jpg",
  	text: "[北京]爱琴海庄园门票+冰雪乐园特惠票（下午场）",
  	price: 19.9,
  	realPrice: 98,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/p/tts4/1704/c3/dab13f6849256d02.jpg_640x266_700e2268.jpg",
  	text: "[北京]【三环内上门接】北京慕田峪踏青一日游，纯玩无购物，人少风景好",
  	price: 148,
  	realPrice: 399,
  	isShow:true,
  	mon:2
  },{
  	href: "http://img1.qunarzz.com/p/tts4/1703/29/3d3d29034018db02.jpg_640x266_bcd86dd9.jpg",
  	text: "[北京]【赠杜莎】北京故宫+八达岭长城+鸟巢水立方一日游，无线讲解器",
  	price: 138,
  	realPrice: 200,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_640x266_3898f6e9.jpg",
  	text: "[北京]【活动票】金海湖风景区成人特惠票",
  	price: 19.9,
  	realPrice: 30,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1603/98/981026196d791e0890.water.jpg_640x266_3c341a72.jpg",
  	text: "[北京]北京园博园成人票",
  	price: 18,
  	realPrice: 20,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/wugc/p50/201308/08/46794cf970fa2e2693835fbb.jpg_640x266_4bdc9d3e.jpg",
  	text: "[北京]老舍茶馆京馆演出票(9排10排11排）",
  	price: 169,
  	realPrice: 180,
  	isShow:false,
  	mon:1
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_640x266_a251876f.jpg",
  	text: "[北京]北京动物园+北京海洋馆（含熊猫馆）成人套票（团队票）",
  	price: 163,
  	realPrice: 165,
  	isShow:true,
  	mon:6
  },{
  	href: "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_640x266_c158dc59.jpg",
  	text: "[北京]水立方成人票",
  	price: 30,
	realPrice: 30,
  	isShow:true,
  	mon:1
  }]
export default {
    name: 'inflist',
    data () {
   	 	return {
   			items:items
    	}
   
    },


}
</script>


<style scoped>
@import "../../assets/css/base/reset.css";

img{
	width: 100%;
  display: block;
  vertical-align: middle;
}

ul,li{
	display: block;
}

li{
	position: relative;
}

.img{
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 41.5625%;
  background: #f0f0f0;
}

.remai{
	border-width: .18rem .08rem .18rem 0;
  border-style: solid;
  border-color: #fa8514 transparent #fa8514 #fa8514;
  position: absolute;
  bottom: .1rem;
  left: 0;
  width: 1.12rem;
  display: block;
}

.remai span{
  display: inline-block;
  position: absolute;
  top: -.18rem;
  left: 0;
  padding: 0 .2rem;
  font-size: .24rem;
  line-height: .36rem;
  color: #fff;
}

.item-list{
	padding: .2rem 0 .3rem 0;
	display: flex;
	width: 100%;

}

.item-text{
	padding: 0 .2rem;
	height: 0.88rem;
	line-height: 0.44rem;
	font-size: 0.32rem;
	word-wrap: break-word;
	word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  margin: 0;
}

.prices{
	padding-right: .2rem;
	text-align: right;
	margin-top: -.04rem;
	display: block;
	line-height: 1;
	font-size: .28rem;
	position: relative;
}

.item-pirce-logo{
	font-size: .24rem;
	color: #ff4500;
	display: block;
	text-align: right;
}

.item-pirce{
	font-size: .48rem;
	padding-left: .03rem;
	font-style: normal;
	text-align: right;
}

.item-realPrice-list{
  font-size: 0;
  display: block;
}

.item-realPrice{
  line-height: .4rem;
  font-size: .24rem;
  color: #999;
  text-decoration: line-through;

}

.return{
	margin-right: 0rem;
	padding: .03rem .04rem 0.02rem .04rem;
	padding-right: 0.03rem;
	background: #ff6b62;
	color: #fff;
	line-height: .4rem;
	font-size: .24rem;
	white-space: nowrap;
	text-align: right;
}

.price{
	margin-left: -0.1rem;
	background: #fff;
	color: #ff6b62;
	line-height: .4rem;
	font-size: .24rem;
	white-space: nowrap;
	text-align: right;
	border: 1px solid #ff6b62;
	padding: 0 .06rem 0 .06rem;
}

.quan{
	margin-right: .15rem;
  line-height: .4rem;
  border: 1px solid #ff6b62;
  font-size: .24rem;
  white-space: nowrap;
}

em{
	font-size: .24rem;
	line-height: .35rem;
	padding: 0;
}

</style>