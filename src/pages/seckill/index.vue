<template>
    <div class="box" @scroll="handleScroll">
        <SeckillHeader></SeckillHeader>
        <div class="content">
            <div class="banner-box">
                <img class="banner-img" alt="1元秒杀！门票绝对低价！ " src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/banner.jpg">
            </div>

            <NavList></NavList>

            <div class="modules-content caption-box">
                <img class="caption-img" alt="热销爆款 " src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/caption_0.jpg">
            </div>
            <Yiyuan :data="yiyuanItems"></Yiyuan>
            <CityNav></CityNav>
            <List class="list1" :data="marketItems"></List>
            <List class="list2" :data="daytourItems"></List>
            <List class="list3" :data="dabbleItems"></List>

        </div>
        <div class="footer">
            <div class="cost-note"><em class="cost-light">票面价</em>是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
        </div>
    </div>
</template>

<script>
import NavList from './navList'
import Yiyuan from './yiyuan'
import SeckillHeader from './header'
import CityNav from './citynav'
import List from './city_content'


export default {
    name: 'index',
    components:{
        NavList,
        Yiyuan,
        SeckillHeader,
        CityNav,
        List
    },
    data () {
        return {
            yiyuanItems:[],
            marketItems:[],
            dabbleItems:[],
            daytourItems:[]
        }
    },
    created() {
        console.log();
        this.$http.get('/static/seckill.json').then(response => {
            var data = response.body.data;
            this.yiyuanItems = data.yiyuanItems;
            this.dabbleItems = data.dabbleItems;
            this.daytourItems = data.daytourItems;
            this.marketItems = data.marketItems;
        }, response => {
          console.log("ajax error");
        });
            window.addEventListener('scroll', this.handleScroll);
    },

    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods:{

        handleScroll(){

            let navBox = document.getElementsByClassName("nav-box")[0],
                nav = navBox.firstChild,
                navList = nav.children,
                length = navList.length,

                ListElem = document.getElementsByClassName("modules-content"),
                scrollTop = document.body.scrollTop,

                clientHeight = document.documentElement.clientHeight;


            if(scrollTop >= navBox.offsetTop){
                nav.className = "nav nav-fixed";
            }else{
                nav.className = "nav";
            }

            let listHeight = [];
            for(let i=0; i<length; i++){
                let minHeight = ListElem[i].offsetTop,
                    maxHeight = ListElem[i].offsetTop + ListElem[i].offsetHeight;
                listHeight.push({"minHeight":minHeight,"maxHeight":maxHeight})
            }

            listHeight.map(function(value,index){
                if(scrollTop + clientHeight/2 >= value.minHeight && scrollTop + clientHeight/2 < value.maxHeight){
                    for(let i=0; i<length; i++){
                        navList[i].className = "nav-list";
                    }
                    navList[index].className = "nav-list active";
                }
            })
        }
    }
}

</script>

<style scoped>

@import "../../assets/font/iconfont.css";

.box{
    background: #28a3e1;
    overflow: hidden;
}
.iconfont{
  color:#fff;
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
    color:#fff;
}
.index-icon{
    width: 100%;
    font-size: .5rem;
    display: inline-block;
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
.banner-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 71.2%;
}
.banner-img{
    width:100%;
    vertical-align: top;
}
.caption-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 26.8%;
}
.caption-img{
    width:100%;
    vertical-align: top;
}
.footer{
    width: 100%;
    overflow: hidden;
    background: #71c148;
}
.cost-note {
    position: relative;
    padding: .16rem .2rem;
    background: rgba(0,0,0,.4);
    color: #fff;
    font-size: .24rem;
    line-height: .32rem;
    text-indent: 1.3em;
}
.cost-note::before {
    content: "0";
    overflow: hidden;
    position: absolute;
    top: .18rem;
    left: .2rem;
    width: .24rem;
    height: .24rem;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAF+SURBVEiJvZbhbcIwEIU/EAN4hHSDbFCyQToBygTtBrQbtBNETBA2CB2gwhvABvUG7Q/fYSd1Egq0T4oIZ997sZ9zl9nXB1MogXsg78Ut8A5sx5LnI2Nr4BNohNwCO7msxBqZsx4iWSRiOVADGfAKvAFuIN8Aj8ATfqWViJ8w621RDrTAEXiQ33OQ4VeTAUUsEgsY4CCkReKpjZAg4qnxVkTudDz2oJZgihz86pZy9Q2nl1trUD1Y4vdwiBy8uc/RfQoO70MrnDvdIjW1GEj8LdTHSreoBDY3Ike4SvAe5HiD7FiGoCEYPQYrnPlCbjQ4BTM9pcNlxt7km+BfBPRYps72pVAuN8fvl/sDAQdY3aItsLqhwEo4Tx5sCGXgWijPJhbYiWLN+UcxBSMcW+HsnKKKUBEvEYlzKw3GAloNM0LZ7aOKkyPEOZ2C2X8PLKHg7fGtMF7NkW4TMjJnL/87zQZ+drQYa3wrNIQ+rE9mCP3B4VvrS4pkTEBx1VfFN1IoZIDYRhp5AAAAAElFTkSuQmCC) center/contain no-repeat;
}
.cost-light {
    color: #ffcd00;
}
</style>
