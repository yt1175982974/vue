<template>
    <div>
    <index-header></index-header>
    <img-swiper :imgsInfo="imgsInfo"></img-swiper>
    <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
    <sale-tickets></sale-tickets>
    <recommend></recommend>
    <weekend></weekend>
    <foot></foot>
    </div>
</template>

<script>
    import IndexHeader from './header.vue'
    import ImgSwiper from './imgswiper.vue'
    import IconSwiper from './iconswiper.vue'
    import SaleTickets from './saletickets.vue'
    import Recommend from './recommend.vue'
    import Weekend from './weekend.vue'
    import Foot from './foot.vue'
    export default {
        name: 'index',
        data () {
            return {
                iconsInfo:[],
                imgsInfo:[]
            }
        },
        components:{
            "index-header": IndexHeader,
            "img-swiper": ImgSwiper,
            "icon-swiper": IconSwiper,
            "sale-tickets": SaleTickets,
            "recommend": Recommend,
            "weekend": Weekend,
            "foot": Foot
        },
        created() {
            this.$http.get('/static/index.json').then(response => {
              var data = response.body.data;
              this.iconsInfo = data.iconsInfo;
              this.imgsInfo = data.imgsInfo;
            }, response => {
              console.log("ajax error");
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
