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
@import "../css/imgcomponent.css";
</style>
