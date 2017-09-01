<template>
	<div class="banner">
		<swiper :options="swiperOption" >
		    <swiper-slide v-for="item in imgsInfo" key="item.id">
		    	<div class="img-container">
		    		<img class="swiper-img" :src="item.imgUrl" />
		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:["imgsInfo"],
    data () {
	    return {
	        swiperOption: {
		        direction: 'horizontal',
		        autoHeight: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        observeParents: true
	        }
	    }
    },
    components: {
	    "swiper": swiper,
	    "swiper-slide": swiperSlide
    }
}
</script>

<style scoped>
@import '~swiper/dist/css/swiper.css';
.banner {
	height: 2.34rem;
}
.img-container {
    background: #eee;
    overflow: hidden;
    width: 100%;
    padding-bottom: 31.25%;
    height: 0;
    position: relative;
  }
  .swiper-img {
    width: 100%;
  }
 
</style>