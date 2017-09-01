<template>

	<div class="icon-container">
		<swiper :options="swiperOption" >
		    <swiper-slide v-for="page in pages" key="page.index">
		   		<div class="icon-list">
			    	<div class="icon-items" v-for="item in page" key="item.id">
			    		<router-link :to="item.link + '?id=' + item.id">
			    			<img :src="item.imgUrl" :alt="item.itemTitle">	    		
			    			<p class="icon-title" >{{item.itemTitle}}</p>
			    		</router-link>
			    	</div>
		    	</div>
		    </swiper-slide>		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>

</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    props:["iconsInfo"],
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
    computed: {
      pages: function () {
        const pages = [];
        for (var i = 0; i < this.iconsInfo.length; i++) {
          let page = Math.floor(i / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(this.iconsInfo[i]);
        }
        return pages;
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
	.icon-container {
		height: 3.8rem;
	}
	.icon-list {
		overflow: hidden;		
		padding-bottom: .6rem;
	}
	.icon-items {
		float: left;
		width: 25%;
		height: 1.3rem;
		padding-top: .3rem; 
		text-align: center;
	}
	.icon-items img {
		display: block;
		width: .66rem;
		height: .66rem;
		margin: 0 auto;
	}
	.icon-title {
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		color: #212121;
	}
</style>