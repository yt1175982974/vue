<template>
<div>

 <div v-for="item in dayTripswiper" class="background-img" v-show="show" > 
    <div class="close-mask iconfont" @click="handleCloseClick" v-html="item.font"></div>
    <swiper :options="swiperOption" >
        <swiper-slide>
            <div class="img-container">
                <img class="swiper-img" :src="item.swiper1Url" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-container">
                <img class="swiper-img" :src="item.swiper2Url" />
            </div>
        </swiper-slide>  
        <swiper-slide>
            <div class="img-container">
                <img class="swiper-img" :src="item.swiper3Url" />
            </div>
        </swiper-slide>
         <swiper-slide>
            <div class="img-container">
                <img class="swiper-img" :src="item.swiper4Url" />
            </div>
        </swiper-slide>         
    </swiper>       
    </div> 
    
    <div v-for="item in dayTriphead" class="head-fiveb-img" >
        <img class="fiveb-img" :src="item.imgUrl" @click="handleImgClick">
        <div class="head-fiveb-departure">
            <span class="head-fiveb-departure-left">{{item.departure}}</span>
            <span class="head-fiveb-departure-right">{{item.destination}}</span>
        </div>
    </div>

</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data () {
            return {
                show:false,
                swiperOption: {
                direction : 'horizontal',
                paginationClickable :true,
                observeParents:true
                }
            }
        },
    props: ["dayTriphead","dayTripswiper"],
    methods:{
        handleReturnClick() {
            this.$router.go(-1)
        }, 
        handleImgClick() {
            this.show=true
        },
        handleCloseClick() {            
            this.show=false     
        },
         components:{
            "swiper": swiper,
            "swiper-slide": swiperSlide
        }
    } 
}       
</script>

<style scoped>
@import "../../../assets/font/iconfont.css";
@import "../css/swiper.css";
.img-container{
    width: 100%;     
}
.swiper-container {
    margin-top: 13%
}
.swiper-img{
    margin-top: 3.7rem;
    width:100%;
    height: 3.7rem;     
}
.close-mask{
    position: absolute;
    top:2%;
    right: 3%;
    width: 0.77rem;
    height: 0.77rem;
    border-radius: 50%;
    line-height: 0.78rem;
    background: #5f666e;
    text-align: center; 
    color: white;
    font-size: 0.32rem;
    overflow: hidden;
    opacity: 0.7;       
}
.background-img{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.9);
    z-index: 100000;
    overflow: hidden;     
}
.head-fiveb-img {
    overflow: hidden;
    position: relative;
}
.fiveb-img {
    width: 100%;
    min-height: 4rem;
}
.head-fiveb-departure {
    position: absolute;
    bottom: 0.1rem;
    color: #fff;
    font-size: .24rem;
    width: 100%;
    padding: 0 0.5rem;
    box-sizing: border-box; 
    margin-bottom: .42rem
}
.head-fiveb-departure-right {
    float:right;
}
</style>
