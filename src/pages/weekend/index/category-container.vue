<template>
  <div class="category-container">
    <div class="category-item" v-for="item in category" :key="item.id">
        <router-link :to='item.link' >
        <a href='#' >      
	        <img :src="item.imgurl" :alt="item.title">
	        <h3 class="category-keywords mpg-ellipsis">{{item.title}}</h3>
        </a>
       </router-link>
    </div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      	category: [{
      		"imgurl":"http://img1.qunarzz.com/piao/fusion/1511/ac/cea9a29c2524c4f7.png",
      		"title": "周边度假",
      		"id": "a1",
      		"link": "category/a1"
      	},{
      		"imgurl":"http://img1.qunarzz.com/piao/fusion/1511/bd/49ec5e1d94c677f7.png",
      		"title": "城市好玩",
      		"id": "a2",
      		"link": "category/a2"
      	},{
      		"imgurl":"http://img1.qunarzz.com/piao/fusion/1603/69/aafef9983dcd6ef7.png",
      		"title": "踏青赏花",
      		"id": "a3",
      		"link": "category/a3"
      	},{
      		"imgurl":"http://img1.qunarzz.com/piao/fusion/1603/88/3690c3682c3e8bf7.png",
      		"title": "周末活动",
      		"id": "a4",
      		"link": "category/a4"
      	}]
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/font/iconfont.css";
  .category-container {
    overflow: hidden;
    background-color: #fff;
	}
	.category-item {
    float: left;
    width: 25%;
    padding: .4rem 0 .5rem 0;
    text-align: center;
	}
	.category-item img {
    width: 56.25%;
    min-height: .9rem;
    background: 0;
}
.category-keywords {
    margin-top: .16rem;
    color: #212121;
    font-size: .26rem;
}
</style>
