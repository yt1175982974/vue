<template>
  <div class="detail-main">
	  	<detail-header></detail-header>
	  	<detail-profile></detail-profile>
	  	<detail-content></detail-content>
	  	<detail-recommen></detail-recommen>
	  	<detail-footer></detail-footer>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
	import DetailHeader from './header.vue'
	import DetailProfile from './profile.vue'
	import DetailContent from './content.vue'
	import DetailRecommen from './recommen.vue'
	import DetailFooter from './footer.vue'
	export default {
	    name: 'weekendDetail',
	    data () {
	      return {
	      }
	    },
	    components: {
	    	"detail-header": DetailHeader,
	    	"detail-profile": DetailProfile,
	    	"detail-content": DetailContent,
	    	"detail-recommen": DetailRecommen,
	    	"detail-footer": DetailFooter
	    }
	}
</script>
<style scoped>
	.detail-main{
		background: #f1f5f6;
	}
</style>

