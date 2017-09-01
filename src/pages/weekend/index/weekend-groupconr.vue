<template>
	<div class="weekend-groupcon ">
        <h2 class="weekend-title"><span class="weekend-titleicon"></span>周末精选</h2>
        <ul class="weekendtopic-list">
            <li class="weekendtopic-item"  v-for='item in imgUrl' :key='item.id'>
                <router-link :to='item.link' >
                	<a href="#" class="theme-link" @click='handleClick'>
                		<img class="weekendtopic-img loading" :src="item.url" />
                	</a>
                </router-link>
            </li>
          
        </ul>
    </div>
</template>

<script>
  export default {
  	methods:{
  		handleClick() {
  			alert('页面丢失')
  		}
  	},
    data () {
      return {
      	imgUrl:[{
      		"url":"http://img1.qunarzz.com/piao/fusion/1708/ab/877bdbdc81af5702.jpg_640x200_3e02aad5.jpg",
      		"id": 1,
      		"link":'groupconr/1'
      	},{
      		"url":"http://img1.qunarzz.com/piao/fusion/1708/fe/8e9fb9b5f4ec402.jpg_640x200_7830ed65.jpg",
      		"id": 2,
      		"link":'groupconr/2'
      	}]
      }
    }
  }
</script>

<style scoped>

 .weekend-groupcon {
    margin-top: .2rem;
    background-color: #fff;
}
.weekend-title {
    overflow: hidden;
    position: relative;
    height: .88rem;
    margin-left: .2rem;
    font-size: .28rem;
    line-height: .88rem;
    text-indent: .15rem;
}
.weekend-title::before {
    content: " ";
    overflow: hidden;
    position: absolute;
    top: .32rem;
    left: 0;
    height: .25rem;
    width: .06rem;
    background: #1ba9ba;
    border-radius: .04rem;
}

.weekendtopic-list {
    padding: 0 .2rem .11rem;
}
.weekendtopic-item {
    margin-bottom: .2rem;
}
.weekendtopic-img {
    width: 100%;
    min-height: 2rem;
}
.loading {
    background: #f0f0f0 url(//simg3.qunarzz.com/piao/images/loading_camel.gif) center no-repeat;
}

</style>
