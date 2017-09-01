<template>
	<div class="nearcity-container">
    	<a class="weekend-nearcity " :href="item.link" v-for='item in nearcity' :key='item.id'>{{item.title}}</a> 
	</div>
</template>

<script>
  export default {
    data () {
      return {
      	nearcity:[{
      		"title":"北京野生动物园",
      		"id": 1,
      		"link": "nearcity/1"
      	},{
      		"title":"慕田峪长城",
      		"id": 2,
      		"link": "nearcity/2"
      	},{
      		"title":"九华山庄",
      		"id": 3,
      		"link": "nearcity/3"
      	},{
      		"title":"北京园博园",
      		"id": 4,
      		"link": "nearcity/4"
      	},{
      		"title":"世界花卉大观园",
      		"id": 5,
      		"link": "nearcity/5"
      	},{
      		"title":"颐和园",
      		"id": 6,
      		"link": 6
      	}]
      }	
    }
  }
</script>

<style scoped>

 .nearcity-container {
    position: relative;
    overflow: hidden;
    z-index: 0;
    background: #fff;
    border-top:.01rem solid #eee;
}

.ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.weekend-nearcity {
	box-sizing: border-box;
    float: left;
    z-index: 10;
    width: 33.33%;
    height: .8rem;
    margin-bottom: -.02rem;
    padding: .02rem 0;
    color: #616161;
    font-size: .28rem;
    line-height: .8rem;
    text-align: center;
    border-right:.01rem solid #eee;
    border-bottom:.01rem solid #eee;
    }
.weekend-nearcity:nth-child(3){
	border-right:none
}
.weekend-nearcity:nth-child(6){
	border-right:none
}

</style>
