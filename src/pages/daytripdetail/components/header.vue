<template>
    <div>

        <div v-for="item in dayTripheadtop">

            <div class="left-arrow iconfont" v-html="item.headtop"></div>

            <div class="head-top" @scroll="heightScroll()" v-show="scrollTop">

                <span class="mp-header-left iconfont" @click="handleReturnClick" v-html="item.headtop"></span>

                <h1 class="head-title">{{item.headmain}}</h1>

            </div>

        </div>

        <div v-for="item in dayTripcard" class="mp-prdcard">

            <h3 class="mp-prdcard-name">{{item.adres}}</h3>

            <div class="mp-prdcard-pricecon">

                <span class="mp-prdcard-span1" v-html="item.currency"></span>

                <span class="mp-prdcard-span2">{{item.money}}</span>

                <span class="mp-prdcard-span3">{{item.start}}</span>

                <span class="mp-prdcard-span4">{{item.time}}</span>

                <span class="mp-prdcard-span5">{{item.sold}}</span>

            </div>

            <div class="mp-prdcard-tagcon">

                <ul>

                    <li class="prdcard-tagcon-li">

                        <span class="prdleft iconfont" v-html="item.icon"></span>{{item.t1}}

                    </li>

                    <li class="prdcard-tagcon-li">

                        <span class="prdleft iconfont" v-html="item.icon"></span>{{item.t2}}

                    </li>

                    <li class="prdcard-tagcon-li">

                        <span class="prdleft iconfont" v-html="item.icon"></span>{{item.t3}}

                    </li>

                    <li class="prdcard-tagcon-li">

                        <span class="prdleft iconfont" v-html="item.icon"></span>{{item.t4}}

                    </li>

                </ul>

            </div>

        </div>

    </div>
</template>

<script>

import {

    swiper,

    swiperSlide

} from 'vue-awesome-swiper'

export default {

    data() {
        return {
            show: false,
            scrollTop: false,
            scroll: '',
            swiperOption: {
                direction: 'horizontal',
                paginationClickable: true,
                observeParents: true
            }
        }
    },

    props: ["dayTripheadtop", "dayTriphead", "dayTripcard", "dayTripswiper"],

    methods: {
        handleReturnClick() {
            this.$router.go(-1)
        },

        handleImgClick() {
            this.show = true
        },

        handleCloseClick() {
            this.show = false
        },

        heightScroll() {
            if (document.body.scrollTop > 120) {
                this.scrollTop = true
            } else {
                this.scrollTop = false
            }
        }

    },

    mounted() {
        window.addEventListener('scroll', this.heightScroll)
    },

    components: {
        "swiper": swiper,
        "swiper-slide": swiperSlide
    }

}
</script>

<style scoped>
@import "../../../assets/font/iconfont.css";
@import "../css/swiper.css";
@import "../css/header.css";
</style>
