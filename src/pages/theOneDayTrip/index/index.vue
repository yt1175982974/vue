<template>
    <div class="indexpage">
        <IndexHeader></IndexHeader>
        <img-swiper :imgsInfo="imgsInfo"></img-swiper>
        <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
        <must-sights :sightsInfo="sightsInfo"></must-sights>
        <hot-cities :citiesInfo="citiesInfo"></hot-cities>
        <IndexSubBanner></IndexSubBanner>
        <IndexTourLine></IndexTourLine>
        <IndexTickets></IndexTickets>
    </div>
</template>

<script>
    import IndexHeaderComponent from "./components/header.vue"
    import ImgSwiperComponent from "./components/imgswiper.vue"
    import IconSwiperComponent from "./components/iconswiper.vue"
    import MustSightsComponent from "./components/mustsights.vue"
    import HotCitiesComponent from "./components/hotcities.vue"
    import IndexSubBanner from "./components/subBanner.vue"
    import IndexTourLine from "./components/tourLine.vue"
    import IndexTickets from "./components/tickets.vue"

    export default {
        data () {
            return {
                imgsInfo: [],
                iconsInfo: [],
                sightsInfo: [],
                citiesInfo: []
            }
        },
        created() {
            this.$http.get('/static/theOneDayTripindex.json').then(response => {
                var data = response.body.data;
                this.imgsInfo = data.imgsInfo;
                this.iconsInfo = data.iconsInfo;
                this.sightsInfo = data.sightsInfo;
                this.citiesInfo = data.citiesInfo;
            }, response => {
                console.log("ajax error");
            });
        },
        components: {
            "IndexHeader" : IndexHeaderComponent,
            "ImgSwiper" : ImgSwiperComponent,
            "IconSwiper" : IconSwiperComponent,
            "MustSights" : MustSightsComponent,
            "HotCities" : HotCitiesComponent,
            "IndexSubBanner" : IndexSubBanner,
            "IndexTourLine" : IndexTourLine,
            "IndexTickets" : IndexTickets
        }
    }
</script>

<style>
    @import "../../../assets/font/iconfont.css";

    .indexpage {
        background-color: #f5f5f5;
    }
    .areatitle {
        background: #fff;
    }
    .areatitle-icontext {
        position: relative;
        padding: 0 .2rem;
        height: .84rem;
        color: #000;
        font-weight: normal;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .1em;
    }
    .areatitle-icon {
        position: relative;
        top: .06rem;
        display: inline-block;
        width: .35rem;
        height: .35rem;
        background-size: .35rem .35rem;
    }
    .areatitle-more {
        position: absolute;
        right: .2rem;
        top: 0;
        font-size: .26rem;
        line-height: .78rem;
    }
    .areatitle-morelink {
        color: #616161;
    }
</style>
